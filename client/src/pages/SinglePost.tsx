import { Link, useNavigate, useParams } from 'react-router-dom';
import Image from '../components/Image';
import SinglePostSidebar from '../features/Post/SinglePostSidebar';
import CommentList from '../features/Post/CommentList';
import { format } from 'timeago.js';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PostData } from '../utils/interfaces';

const fetchPost = async (slug: string): Promise<PostData> => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  if (!slug) {
    navigate('/not-found', { replace: true });
    return null;
  }

  const {
    isLoading,
    error,
    data: post // rename data as post
  } = useQuery<PostData>({
    queryKey: ['post', slug],
    queryFn: () => fetchPost(slug)
  });

  if (isLoading) return 'loading';
  if (error) return 'An error has occurred: ' + error.message;
  if (!post) return navigate('/not-found');

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="flex flex-col gap-8 lg:w-3/5">
          <h1 className="text-xl font-semibold md:text-3xl xl:text-4xl 2xl:text-5xl">{post.title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Written by</span>
            <Link to="/" className="text-blue-800">
              {post.user?.username || 'Unknown Author'}
            </Link>
            <span>on</span>
            <Link to="/" className="text-blue-800">
              {post?.category}
            </Link>
            <span>{format(post.createdAt)}</span>
          </div>
          <p className="font-medium text-gray-500">{post.description}</p>
        </div>
        {post.image && (
          <div className="hidden w-2/5 lg:block">
            <Image path={post.image} alt="Laptop on a desk with a bookshelf in the background" className="rounded-2xl object-cover" imageWidth="600"></Image>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex flex-col gap-6 text-justify lg:w-[75%] lg:text-lg">{post.content}</div>
        {post && <SinglePostSidebar post={post} />}
      </div>
      <CommentList postId={post._id} />
    </div>
  );
};

export default SinglePost;
