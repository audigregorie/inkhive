import axios from 'axios';
import CommentListItem from './CommentListItem';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@clerk/clerk-react';
import { CommentData, NewComment } from '../../utils/common';
import { toast } from 'sonner';

const fetchComments = async (postId: string): Promise<CommentData[]> => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`);
  return res.data;
};

const CommentList = ({ postId }: { postId: string }) => {
  const { getToken } = useAuth();

  const {
    isPending,
    error,
    data: comments // rename data as comments
  } = useQuery<CommentData[]>({
    queryKey: ['comments', postId],
    queryFn: () => fetchComments(postId)
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment: NewComment) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/comments/${postId}`, newComment, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },
    onError: (err) => {
      toast.error('Error creating comment');
      console.error('Error creating comment:', err);
    }
  });

  if (!comments) return 'Comments not found!';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: NewComment = {
      description: formData.get('description')?.toString() || ''
    };

    mutation.mutate(data);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      e.currentTarget.requestSubmit();
    }
  };

  return (
    <div className="mb-12 flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form onSubmit={handleSubmit} onKeyDown={handleOnKeyDown} className="mb-4 flex w-full items-center justify-between gap-8">
        <textarea name="description" id="description" placeholder="Write a comment..." className="w-full rounded-xl p-4" />
        <button type="submit" className="rounded-xl bg-blue-800 px-4 py-3 font-medium text-white">
          Send
        </button>
      </form>
      {isPending ? 'loading...' : error ? 'An error has occurred' : comments.map((comment) => <CommentListItem key={comment._id} comment={comment} />)}
    </div>
  );
};

export default CommentList;
