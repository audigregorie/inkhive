import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 p-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
      <p className="mb-6 text-lg text-gray-600">Oops! The page you’re looking for doesn’t exist.</p>
      <button onClick={navigateHome} className="rounded-md bg-[#64f3d5] px-6 py-3 text-lg font-medium text-black transition-all">
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
