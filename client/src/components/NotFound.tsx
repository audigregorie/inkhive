import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
      <p className="mb-6 text-lg text-gray-600">Sorry! The page you’re looking for doesn’t exist.</p>
      <button onClick={navigateHome} className="rounded-md bg-blue-800 px-6 py-3 text-lg font-medium text-[#e6e6ff] transition-all">
        Back Home
      </button>
    </div>
  );
};

export default NotFound;
