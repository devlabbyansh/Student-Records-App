import { Link } from "react-router-dom";
import { RiWindowsFill } from "@remixicon/react";

const NavTwo = () => {
   return (
     <>
       <nav className="flex flex-col items-start gap-4 w-65 h-180 bg-white px-8 border-r-2 border-zinc-300">
         <div className="flex justify-center items-center gap-6 mt-7">
           <RiWindowsFill size={18} className="font-semibold rounded-xl" />
           <Link to="/" className="text-xl">
             Dashboard
           </Link>
         </div>
         <div className="flex justify-center items-center gap-6">
           <RiWindowsFill size={18} className="font-semibold" />
           <Link to="/addstudent" className="text-xl">
             Add Student
           </Link>
         </div>
         <div className="flex justify-center items-center gap-6">
           <RiWindowsFill size={18} className="font-semibold" />
           <Link to="/managestudent" className="text-xl">
             Manage Student
           </Link>
         </div>
         <div className="flex justify-center items-center gap-6">
           <RiWindowsFill size={18} className="font-semibold" />
           <Link to="/reports" className="text-xl">
             Report
           </Link>
         </div>
       </nav>
     </>
   );
}

export default NavTwo;
