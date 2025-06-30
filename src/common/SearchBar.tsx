import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div>
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full border border-gray-300 rounded-md px-8 py-2 focus:outline-none bg-white"
          />
          <button className="absolute right-0 bottom-0 top-0 text-white bg-[#00A788] p-3 rounded-md cursor-pointer">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
