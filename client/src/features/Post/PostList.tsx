import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import PostListItem from './PostListItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'react-router-dom';

const fetchPosts = async (pageParam: number, searchParams: URLSearchParams) => {
  try {
    const searchParamsObj = Object.fromEntries([...searchParams]);

    const params = {
      page: pageParam,
      limit: location.pathname === '/' ? 2 : 10,
      ...searchParamsObj
    };

    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, { params });
    return res.data;
  } catch (err) {
    console.error('Error fetching posts:', err);
    throw err;
  }
};

const PostList = () => {
  const [searchParams] = useSearchParams();

  const { data, error, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ['posts', searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => (lastPage.hasMorePosts ? pages.length + 1 : undefined)
  });

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  if (status === 'pending') return 'Loading...';
  if (status === 'error') return 'An error has occurred: ' + error.message;

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={allPosts.length === 0 ? <p>No posts found under this category.</p> : <p> All posts loaded. </p>}>
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
