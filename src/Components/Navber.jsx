import { Link, NavLink } from "react-router-dom";
import './Common.css'
 

const Navbar = () => {
    return (
        <>
            <div className="bg-[#fafaff]">
            <div className="max-w-6xl mx-auto">
            <div className="py-6 flex justify-between items-center">
                 <div>
                      <Link to={'/'}> <h1 className="text-3xl font-semibold">CareerHub</h1></Link>
                 </div>
                 <div>
                       <NavLink to={'/'} className='text-[#757575] mr-4 text-[1rem]'>Statistics</NavLink>
                       <NavLink to={'/applied_job'} className='text-[#757575] mr-4 text-[1rem]'>Applied Jobs</NavLink>
                       <NavLink className='text-[#757575] mr-4 text-[1rem]'>Blog</NavLink>
                 </div>
                 <div>
                     <button className="text-lg bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white font-semibold px-4 py-2 rounded-lg">Star Applying</button>
                 </div>
             </div>
            </div>
            </div>
        </>
    );
};

export default Navbar;