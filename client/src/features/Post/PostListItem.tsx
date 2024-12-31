import { Link } from 'react-router-dom';
import Image from '../../components/Image';

const PostListItem = () => {
  return (
    <div className="flex flex-col gap-8 xl:flex-row">
      <div className="md:w-3/5 xl:w-1/2">
        <Image
          path="/public/france-upsplash.jpg"
          alt="Goldish brown and eloquent chateau in France"
          className="h-full w-full rounded-2xl object-cover"
          imageWidth="750"
        />
      </div>

      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/" className="text-4xl font-semibold">
          Aut debitis reiciendis quidem est. Odit itaque molestiae voluptatem ratione tempora eaque sed id fugiat.
        </Link>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Written by</span>
          <Link to="/" className="text-blue-800">
            John Doe
          </Link>
          <span>on</span>
          <Link to="/" className="text-blue-800">
            Web Design
          </Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, obcaecati atque eos cupiditate animi officia asperiores modi eveniet dicta distinctio
          repudiandae error vero, nisi nostrum blanditiis laborum pariatur iusto sit? Id itaque pariatur quia, tenetur inventore aliquid minima sit, veniam
          aliquam eveniet minus dolore perspiciatis optio est neque. Ipsum in ipsa quod sunt neque porro itaque ex nihil tenetur omnis.
        </p>
        <Link to="/" className="text-sm text-blue-800 underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
