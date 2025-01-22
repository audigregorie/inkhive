import { Link } from 'react-router-dom';
import Image from '../../components/Image';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { format } from 'timeago.js';

const fetchPost = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`);
  return res.data;
};

const FeaturedPosts = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['featuredPost'],
    queryFn: () => fetchPost()
  });

  if (isLoading) return 'loading';
  if (error) return 'An error has occurred: ' + error.message;

  console.log(data);
  const featuredPosts = data.posts;
  if (!featuredPosts || featuredPosts.length === 0) {
    return;
  }

  return (
    <>
      {featuredPosts && <h2 className="mb-4 mt-8 text-2xl text-gray-600">Featured Posts</h2>}
      <div className={`${featuredPosts ? null : 'mt-8'} flex flex-col gap-8 lg:flex-row`}>
        {featuredPosts[0] && (
          <div className="flex w-full flex-col gap-4 lg:w-1/2">
            <Link to={featuredPosts[0].slug}>
              {featuredPosts[0].image && (
                <Image path={featuredPosts[0].image} alt="Trees and mountain landscape" className="rounded-3xl object-cover" imageWidth="955" />
              )}
            </Link>
            <div className="flex items-center gap-4">
              <h1 className="font-semibold lg:text-lg">01.</h1>
              <Link to={`/posts?category=${featuredPosts[0].category}`} className="text-blue-800 lg:text-lg">
                {featuredPosts[0].category}
              </Link>
              <span className="text-gray-500">{format(featuredPosts[0].createdAt)}</span>
            </div>
            <Link to={featuredPosts[0].slug} className="text-xl font-semibold lg:text-3xl lg:font-bold">
              {featuredPosts[0].title}
            </Link>
          </div>
        )}

        <div className="flex w-full flex-col gap-4 lg:w-1/2">
          {featuredPosts[1] && (
            <div className="flex justify-between gap-4 lg:h-1/3">
              {featuredPosts[1].image && (
                <div className="aspect-video w-1/3">
                  <Link to={featuredPosts[1].slug}>
                    <Image
                      path={featuredPosts[1].image}
                      alt="Views form the back of a caravan"
                      className="h-full w-full rounded-3xl object-cover"
                      imageWidth="280"
                    />
                  </Link>
                </div>
              )}
              <div className="w-2/3">
                <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
                  <h1 className="font-semibold">02.</h1>
                  <Link to={`/posts?category=${featuredPosts[1].category}`} className="text-blue-800">
                    {featuredPosts[1].category}
                  </Link>
                  <span className="text-gray-500">{format(featuredPosts[1].createdAt)}</span>
                </div>
                <Link to={featuredPosts[1].slug} className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl">
                  {featuredPosts[1].title}
                </Link>
              </div>
            </div>
          )}

          {featuredPosts[2] && (
            <div className="flex justify-between gap-4 lg:h-1/3">
              {featuredPosts[2].image && (
                <div className="aspect-video w-1/3">
                  <Link to={featuredPosts[2].slug}>
                    <Image path={featuredPosts[2].image} alt="A bouquet of flowers" className="h-full w-full rounded-3xl object-cover" imageWidth="280" />
                  </Link>
                </div>
              )}
              <div className="w-2/3">
                <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
                  <h1 className="font-semibold">03.</h1>
                  <Link to={`/posts?category=${featuredPosts[2].category}`} className="text-blue-800">
                    {featuredPosts[2].category}
                  </Link>
                  <span className="text-gray-500">{format(featuredPosts[2].createdAt)}</span>
                </div>
                <Link to={featuredPosts[2].slug} className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl">
                  {featuredPosts[2].title}
                </Link>
              </div>
            </div>
          )}

          {featuredPosts[3] && (
            <div className="flex justify-between gap-4 lg:h-1/3">
              {featuredPosts[3].image && (
                <div className="aspect-video w-1/3">
                  <Link to={featuredPosts[3].slug}>
                    <Image path={featuredPosts[3].image} alt="A white brown eared dog" className="h-full w-full rounded-3xl object-cover" imageWidth="280" />
                  </Link>
                </div>
              )}
              <div className="w-2/3">
                <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
                  <h1 className="font-semibold">03.</h1>
                  <Link to={`/posts?category=${featuredPosts[3].category}`} className="text-blue-800">
                    {featuredPosts[3].category}
                  </Link>
                  <span className="text-gray-500">{format(featuredPosts[3].createdAt)}</span>
                </div>
                <Link to={featuredPosts[3].slug} className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl">
                  {featuredPosts[3].title}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedPosts;
