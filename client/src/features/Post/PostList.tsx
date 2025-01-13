import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import PostListItem from './PostListItem';
import InfiniteScroll from 'react-infinite-scroll-component';

const fetchPosts = async (pageParam: number) => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
      params: { page: pageParam }
    });
    return res.data;
  } catch (err) {
    console.error('Error fetching posts:', err);
  }
};

const PostList = () => {
  // const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
  const { data, error, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
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
    // <div className="mb-8 flex flex-col gap-12">
    //   <InfiniteScroll
    //     dataLength={allPosts.length}
    //     next={fetchNextPage}
    //     hasMore={!!hasNextPage}
    //     loader={<h4>Loading more posts...</h4>}
    //     endMessage={
    //       <p>
    //         <b>All posts loaded.</b>
    //       </p>
    //     }>
    //     {allPosts.map((post) => (
    //       <PostListItem key={post._id} post={post} />
    //     ))}
    //   </InfiniteScroll>
    // </div>

    <div className="mb-8 flex flex-col gap-12">
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
