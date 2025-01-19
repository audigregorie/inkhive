import { Link } from 'react-router-dom';
import Image from '../../components/Image';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';
import SinglePostSidebarAction from './SinglePostSidebarAction';
import Search from '../../components/Search';
import { PostListItemProps } from '../../utils/interfaces';

const SinglePostSidebar = ({ post }: PostListItemProps) => {
  return (
    <div className="sticky top-8 h-max pr-2">
      <h2 className="mb-4 text-sm font-light">Author</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          {post.user.image && <Image path={post.user.image} alt="User profile image" className="h-12 w-12 rounded-full" imageWidth="48" imageHeight="48" />}
          <Link to="/" className="text-blue-800">
            {post.user.username}
          </Link>
        </div>
        <p className="text-xs">Eos nobis assumenda possimus.</p>
        <div className="flex gap-2">
          <Link to="">
            <IoLogoFacebook className="text-blue-800" />
          </Link>
          <Link to="">
            <IoLogoInstagram className="text-red-800" />
          </Link>
        </div>
      </div>

      <SinglePostSidebarAction post={post} />
      <h2 className="mb-4 mt-8 text-sm font-light">Categories</h2>
      <div className="flex flex-col gap-2 text-sm">
        <Link to="" className="underline">
          All
        </Link>
        <Link to="" className="underline">
          Web Design
        </Link>
        <Link to="" className="underline">
          Development
        </Link>
        <Link to="" className="underline">
          Databases
        </Link>
        <Link to="" className="underline">
          Search Engines
        </Link>
        <Link to="" className="underline">
          Marketing
        </Link>
      </div>
      <div className="mb-4 mt-8">
        <Search />
      </div>
    </div>
  );
};

export default SinglePostSidebar;
