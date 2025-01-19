import { format } from 'timeago.js';
import { CommentListItemProps } from '../../utils/interfaces';
import { Avatar } from '@mui/material';
import { getInitials } from '../../utils/helpers';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';

const CommentListItem = ({ comment, postId }: CommentListItemProps) => {
  const { user } = useUser();
  const { getToken } = useAuth();

  const isAdmin = user?.publicMetadata?.role === 'admin' || false;

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(`${import.meta.env.VITE_API_URL}/comments/${comment._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },
    onError: (err) => {
      toast.error('Error deleting comment');
      console.error('Error deleting comment:', err);
    }
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <div className="flex items-center gap-4">
        {comment.user.username ? (
          <Avatar src={comment.user.image} alt={comment.user.username} />
        ) : (
          <Avatar alt={comment.user.username}>{getInitials(comment.user.username)}</Avatar>
        )}
        <span className="font-medium">{comment.user.username}</span>
        <span className="text-sm text-gray-500">{format(comment.createdAt)}</span>
        {user && (comment.user.username === user.username || isAdmin) && (
          <span onClick={handleDelete} className="cursor-pointer text-xs text-red-300 hover:text-red-500">
            Delete comment
            {deleteMutation.isPending && <span>(In progress...)</span>}
          </span>
        )}
      </div>

      <div className="mt-4">
        <p>{comment.description}</p>
      </div>
    </div>
  );
};

export default CommentListItem;
