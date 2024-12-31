import { IoSearch } from 'react-icons/io5';

const Search = () => {
  return (
    <div className="flex items-center gap-2 rounded-full bg-gray-100 p-2">
      <span className="text-gray-400">
        <IoSearch />
      </span>
      <input type="text" placeholder="search a post..." className="bg-transparent outline-none" />
    </div>
  );
};

export default Search;
