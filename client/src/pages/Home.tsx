import { Link } from 'react-router-dom';
import PostCategories from '../features/Post/PostCategories';
import FeaturedPosts from '../features/Post/FeaturedPosts';
import PostList from '../features/Post/PostList';
import { GoArrowUpRight } from 'react-icons/go';

const Home = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 md:text-5xl lg:text-6xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className="text-md mt-8 md:text-xl">
            Veritatis debitis aut temporibus enim saepe accusantium ipsam, ad iusto, possimus cum alias repellat sequi quas itaque.
          </p>
        </div>

        <Link to="/create/:slug" className="relative hidden md:block">
          <svg viewBox="0 0 200 200" width="200" height="200" className="svg-animation text-lg tracking-widest">
            <path id="circlePath" fill="none" d="M 100, 100 m -75, 0 a 75, 75 0 1,1 150,0 a 75, 75 0 1,1 -150,0" />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write you story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <Link to="/create" className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-800">
            <GoArrowUpRight className="h-12 w-12 text-white" />
          </Link>
        </Link>
      </div>
      <PostCategories />
      <FeaturedPosts />
      <div>
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Home;
