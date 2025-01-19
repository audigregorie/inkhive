import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import PostListItem from './PostListItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'react-router-dom';

const fetchPosts = async (pageParam: number, searchParams: any) => {
  try {
    const searchParamsObj = Object.entries([...searchParams]);
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
      params: { page: pageParam, searchParamsObj }
    });
    return res.data;
  } catch (err) {
    console.error('Error fetching posts:', err);
  }
};

const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, error, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => (lastPage.hasMorePosts ? pages.length + 1 : undefined)
  });

  console.log(data);

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];
  console.log('Fetched data:', allPosts);

  if (status === 'pending') return 'Loading...';
  if (status === 'error') return 'An error has occurred: ' + error.message;

  console.log('Fetched data:', data);

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p>
          <b>All posts loaded.</b>
        </p>
      }>
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
