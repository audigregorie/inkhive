import { Link } from 'react-router-dom';

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
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className="mt-8 text-md md:text-xl">
            Veritatis debitis aut temporibus enim saepe accusantium ipsam, ad iusto, possimus cum alias repellat sequi quas itaque.
          </p>
        </div>

        <Link to="/create/:slug" className="relative hidden md:block">
          <svg viewBox="0 0 200 200" width="200" height="200" className="text-lg tracking-widest svg-animation">
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
          <button className="absolute inset-0 m-auto h-20 w-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="none" stroke="white" strokeWidth="white">
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
