import { IoBookmark, IoBookmarkOutline, IoStar, IoStarOutline, IoTrash } from 'react-icons/io5';
import { PostListItemProps } from '../../utils/interfaces';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const SinglePostSidebarAction = ({ post }: PostListItemProps) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const {
    isPending,
    error,
    data: savedPosts
  } = useQuery({
    queryKey: ['savedPosts'],
    queryFn: async () => {
      const token = await getToken();
      return axios.get(`${import.meta.env.VITE_API_URL}/users/saved`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }
  });

  const isSaved = savedPosts?.data?.some((savedPost: string) => savedPost === post._id);

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(`${import.meta.env.VITE_API_URL}/posts/${post._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    },
    onSuccess: () => {
      toast.success('Post deleted successfully');
      navigate('/');
    },
    onError: () => {
      toast.error('Failed to delete post');
    }
  });

  const queryClient = useQueryClient();

  const saveMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.patch(
        `${import.meta.env.VITE_API_URL}/users/save`,
        {
          postId: post._id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['savedPosts'] });
    },
    onError: () => {
      toast.error('Failed to save post');
    }
  });

  const featureMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.patch(
        `${import.meta.env.VITE_API_URL}/posts/featured`,
        {
          postId: post._id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post', post.slug] });
    },
    onError: () => {
      toast.error('Failed to feature post');
    }
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  const handleSave = () => {
    if (!user) {
      navigate('/login');
    }
    saveMutation.mutate();
  };

  const handleFeature = () => {
    featureMutation.mutate();
  };

  return (
    <>
      <h1 className="mb-4 mt-8 text-sm font-light">Actions</h1>
      {isPending ? (
        <span>Loading...</span>
      ) : error ? (
        <span>Failed to fetch saved posts</span>
      ) : (
        <div onClick={handleSave} className="flex cursor-pointer items-center gap-2 pb-2 text-sm">
          {saveMutation.isPending ? (
            isSaved ? (
              <IoBookmarkOutline className="h-4 w-4" />
            ) : (
              <IoBookmark className="h-4 w-4" />
            )
          ) : isSaved ? (
            <IoBookmark className="h-4 w-4" />
          ) : (
            <IoBookmarkOutline className="h-4 w-4" />
          )}
          <span>Save this post</span>
          {saveMutation.isPending && <span className="text-xs">(In progress...)</span>}
        </div>
      )}

      <div onClick={handleFeature} className="flex cursor-pointer items-center gap-2 pb-2 text-sm">
        {featureMutation.isPending ? (
          post.isFeatured ? (
            <IoStarOutline />
          ) : (
            <IoStar />
          )
        ) : post.isFeatured ? (
          <IoStar className="h-4 w-4" />
        ) : (
          <IoStarOutline className="h-4 w-4" />
        )}
        <span>Feature this post</span>
        {featureMutation.isPending && <span className="text-xs">In progress...</span>}
      </div>

      {user && post.user.username === user.username && (
        <div onClick={handleDelete} className="flex cursor-pointer items-center gap-2 text-sm">
          <IoTrash className="h-4 w-4 text-red-700" />
          <span>Delete this post</span>
          {deleteMutation.isPending && <span className="text-xs">(In progress...)</span>}
        </div>
      )}
    </>
  );
};

export default SinglePostSidebarAction;
