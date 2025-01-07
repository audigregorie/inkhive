import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PostListItem from './PostListItem';

const fetchPosts = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
    return res.data;
  } catch (err) {
    console.error('Error fetching posts:', err);
  }
};

const PostList = () => {
  // const { isPending, error, data } = useQuery({
  const { data } = useQuery({
    queryKey: ['repoData'],
    queryFn: fetchPosts,
    retry: 2
  });

  // if (isPending) return 'Loading...';

  // if (error) return 'An error has occurred: ' + error.message;

  console.log('Fetched data:', data);

  return (
    <div className="mb-8 flex flex-col gap-12">
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </div>
  );
};

export default PostList;
