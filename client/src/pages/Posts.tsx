import { useState } from 'react';
import PostList from '../features/Post/PostList';
import SideMenu from '../components/SideMenu';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <div className="my-4 flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>

      <button onClick={() => setOpen((prev) => !prev)} className="mb-4 rounded-2xl bg-blue-800 px-4 py-2 text-sm text-white md:hidden">
        {open ? 'Close' : 'Filter or Search'}
      </button>
      <div className="flex flex-col-reverse justify-between gap-8 md:flex-row">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? 'block' : 'hidden'} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Posts;
