import { Link } from 'react-router-dom';
import Search from '../../components/Search';

const PostCategories = () => {
  return (
    <div className="hidden items-center gap-8 rounded-3xl bg-white p-4 shadow-lg md:flex xl:rounded-full">
      <div className="flex flex-wrap items-center gap-2">
        <Link to="/posts" className="rounded-full bg-blue-800 px-4 py-2 text-white">
          All Posts
        </Link>
        <Link to="/posts?category=web-design" className="rounded-full px-4 py-2 hover:bg-blue-50">
          Web Design
        </Link>
        <Link to="/posts?category=development" className="rounded-full px-4 py-2 hover:bg-blue-50">
          Development
        </Link>
        <Link to="/posts?category=databases" className="rounded-full px-4 py-2 hover:bg-blue-50">
          Databases
        </Link>
        <Link to="/posts?category=seo" className="rounded-full px-4 py-2 hover:bg-blue-50">
          Search Engines
        </Link>
        <Link to="/posts?category=marketing" className="rounded-full px-4 py-2 hover:bg-blue-50">
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      <Search />
    </div>
  );
};

export default PostCategories;
