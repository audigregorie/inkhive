import { useSearchParams } from 'react-router-dom';
import Search from './Search';
import { FormEvent } from 'react';

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterSort = (e: FormEvent<HTMLInputElement>) => {
    const params = Object.fromEntries([...searchParams]);
    if (params.sort !== e.currentTarget.value) {
      params.sort = e.currentTarget.value;
      setSearchParams(params);
    }
  };

  const handleFilterCategories = (category: string) => {
    const params = Object.fromEntries([...searchParams]);
    if (params.category !== category) {
      params.category = category;
      setSearchParams(params);
    }
  };

  return (
    <div className="sticky top-8 h-max px-4">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mb-4 mt-8 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterSort}
            value="newest"
            className="h-4 w-4 cursor-pointer appearance-none rounded-sm border-[1.5px] border-gray-300 bg-white checked:bg-blue-700"
          />
          Newest
        </label>
        <label htmlFor="" className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterSort}
            value="popular"
            className="h-4 w-4 cursor-pointer appearance-none rounded-sm border-[1.5px] border-gray-300 bg-white checked:bg-blue-700"
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterSort}
            value="trending"
            className="h-4 w-4 cursor-pointer appearance-none rounded-sm border-[1.5px] border-gray-300 bg-white checked:bg-blue-700"
          />
          Trending
        </label>
        <label htmlFor="" className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterSort}
            value="oldest"
            className="h-4 w-4 cursor-pointer appearance-none rounded-sm border-[1.5px] border-gray-300 bg-white checked:bg-blue-700"
          />
          Oldest
        </label>
      </div>
      <h1 className="mb-4 mt-8 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <span onClick={() => handleFilterCategories('general')} className="cursor-pointer hover:text-blue-700">
          All
        </span>
        <span onClick={() => handleFilterCategories('web-design')} className="cursor-pointer hover:text-blue-700">
          Web Design
        </span>
        <span onClick={() => handleFilterCategories('development')} className="cursor-pointer hover:text-blue-700">
          Development
        </span>
        <span onClick={() => handleFilterCategories('databases')} className="cursor-pointer hover:text-blue-700">
          Databases
        </span>
        <span onClick={() => handleFilterCategories('seo')} className="cursor-pointer hover:text-blue-700">
          Search Engines
        </span>
        <span onClick={() => handleFilterCategories('marketing')} className="cursor-pointer hover:text-blue-700">
          Marketing
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
