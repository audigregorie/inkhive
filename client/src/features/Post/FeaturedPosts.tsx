import { Link } from 'react-router-dom';
import Image from '../../components/Image';

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col gap-8 lg:flex-row">
      <div className="flex w-full flex-col gap-4 lg:w-1/2">
        <Image path="/public/landscape-upsplash.jpg" alt="Trees and mountain landscape" className="rounded-3xl object-cover" imageWidth="955" />
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to="/" className="text-blue-800 lg:text-lg">
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        <Link to="/testing" className="text-xl font-semibold lg:text-3xl lg:font-bold">
          Officiis esse sunt totam facilis distinctio quae quis eos similique dolores.
        </Link>
      </div>

      <div className="flex w-full flex-col gap-4 lg:w-1/2">
        <div className="flex justify-between gap-4 lg:h-1/3">
          <div className="aspect-video w-1/3">
            <Image
              path="/public/caravan-upsplash.jpg"
              alt="Views form the back of a caravan"
              className="h-full w-full rounded-3xl object-cover"
              imageWidth="280"
            />
          </div>
          <div className="w-2/3">
            <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">02.</h1>
              <Link to="/" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-gray-500">2 days ago</span>
            </div>
            <Link to="/" className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl">
              Assumenda voluptas deleniti ea. Temporibus labore ratione sequi quos suscipit.
            </Link>
          </div>
        </div>

        <div className="flex justify-between gap-4 lg:h-1/3">
          <div className="aspect-video w-1/3">
            <Image
              path="/public/fabian-mardi-o3TZx8_j7FE-unsplash.jpg"
              alt="A bouquet of flowers"
              className="h-full w-full rounded-3xl object-cover"
              imageWidth="280"
            />
          </div>
          <div className="w-2/3">
            <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">03.</h1>
              <Link to="/" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-gray-500">2 days ago</span>
            </div>
            <Link to="/" className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl">
              Accusantium voluptatem praesentium deserunt sequi ducimus.
            </Link>
          </div>
        </div>

        <div className="flex justify-between gap-4 lg:h-1/3">
          <div className="aspect-video w-1/3">
            <Image path="/public/woman-upsplash.jpg" alt="A white brown eared dog" className="h-full w-full rounded-3xl object-cover" imageWidth="280" />
          </div>
          <div className="w-2/3">
            <div className="mb-4 flex items-center gap-4 text-sm lg:text-base">
              <h1 className="font-semibold">03.</h1>
              <Link to="/" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-gray-500">2 days ago</span>
            </div>
            <Link to="/" className="text-base font-medium sm:text-lg md:text-2xl lg:text-xl xl:text-2xl">
              Aliquid repudiandae corporis numquam ad tempore et quos. Sapiente, voluptates necessitatibus?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
