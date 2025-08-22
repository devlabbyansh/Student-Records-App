import { RiSearchLine } from "@remixicon/react";
import { RiUser2Fill } from "@remixicon/react";

const NavOne = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="w-full h-15 bg-white flex items-center justify-between px-20 py-10 mt-10 border-b-2 border-zinc-200">
      <div className="flex justify-center items-center gap-2">
        <RiUser2Fill size={50} className="text-blue-600" />
        <h1 className="text-4xl font-semibold tracking-tight">
          Student Manager
        </h1>
      </div>

      <div className="flex justify-center items-center gap-2 border-2 border-zinc-200 px-5 rounded-md">
        <RiSearchLine size={25} className="text-zinc-300" />
        <input
          type="text"
          placeholder="Search for student"
          className="text-zinc-400 px-2 focus:outline-none text-xl"
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </div>
    </nav>
  );
};

export default NavOne;
