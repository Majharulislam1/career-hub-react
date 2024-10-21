import './Common.css';
import user from '../assets/images/user.png';

const Hero = () => {
    return (
        <>
        <div className="bg-[#fafaff]">
            <div className="max-w-6xl mx-auto">
                  <div className='flex items-center justify-between h-[70vh]'>
                       <div className='w-1/2'>
                            <h1 className="text-[5rem] font-bold pb-4 leading-tight">
                                One Step Closer To Your <span className="active">Dream Job</span>
                            </h1>
                            <p className='text-[#757575] mb-4'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                            </p>
                            <button className="text-lg bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white font-semibold px-4 py-2 rounded-lg">Get Started</button>
                       </div>
                       <div className='w-1/2 self-end'>
                              <img src={user} className='h-full' alt="" />
                       </div>
                  </div>
            </div>
        </div>
            
        </>
    );
};

export default Hero;