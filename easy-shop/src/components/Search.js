import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = ({handleCategoryChange, handleSearchChange, selectedCategory, searchTerm, allCategories}) => {

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amber-400 rounded">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="p-2 bg-transparent border-none text-black  text-xs xl:text-sm"
        >
          <option value="All">All</option>
          {allCategories.map((item, index)=> (
          <option key={index} value={item}>{item}</option>))
          }
        </select>
        <input
          className="flex grow items-center h-[100%] rounded-l text-black"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="w-[45px] bg-transparent">
           <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900 " /> 
        </button>
      </div>
    </div>
  );
};

export default Search;
