import { Link } from 'react-router-dom';
import Image from '../../components/Image';
import { PostListItemProps } from '../../utils/interfaces';
import { format } from 'timeago.js';

const PostListItem = ({ post }: PostListItemProps) => {
  return (
    <div className="mb-8 flex flex-col gap-8 xl:flex-row">
      {post.image && (
        <Link to={`/${post.slug}`} className="md:w-3/5 xl:w-1/2">
          <Image path={post.image} alt="Goldish brown and eloquent chateau in France" className="h-full w-full rounded-2xl object-cover" imageWidth="750" />
        </Link>
      )}

      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Written by</span>
          <Link to="/" className="text-blue-800">
            {post.user?.username || 'Unknown Author'}
          </Link>
          <span>on</span>
          <Link to="/" className="text-blue-800">
            {post.category}
          </Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.description}</p>
        <Link to={`/${post.slug}`} className="text-sm text-blue-800 underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
