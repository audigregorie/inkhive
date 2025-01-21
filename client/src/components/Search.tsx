import { IoSearch } from 'react-icons/io5';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const query = e.currentTarget.value;

      if (location.pathname === '/posts') {
        setSearchParams({ ...Object.fromEntries(searchParams), search: query });
      } else {
        navigate(`/posts?search=${query}`);
      }
    }
  };

  return (
    <div className="flex items-center gap-2 rounded-full bg-gray-100 p-2">
      <span className="text-gray-400">
        <IoSearch />
      </span>
      <input onKeyDown={handleOnKeyDown} type="text" placeholder="search a post..." className="bg-transparent outline-none" />
    </div>
  );
};

export default Search;
