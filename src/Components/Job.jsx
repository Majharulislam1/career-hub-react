import google from '../assets/logo/google.png'
import location from '../assets/icons/Location.png'
import dolar from '../assets/icons/money.png'

const Job = ({job}) => {

 const {id,logo,job_title, company_name,remote_or_onsite,location,job_type,salary} = job;


    return (
        <>
            <div className="border rounded-lg p-10">
                            <div className='mb-3'>
                                <img src={logo} alt="" />
                            </div>
                            <div>
                                <h1 className='text-[1.5rem] font-bold text-[#474747]'>{job_title}</h1>
                                <p className='text-[#757575] mb-2'>{company_name}</p>
                                <div className='my-4'>
                                     

                                    <div className="p-[1px] rounded-lg bg-gradient-to-r from-[#7e90fe] to-[#9873ff] inline-block mr-4">
                                        <div className="bg-white rounded-lg px-4 py-2">
                                            <span>{remote_or_onsite}</span>
                                        </div>
                                    </div>
                                    <div className="p-[1px] rounded-lg bg-gradient-to-r from-[#7e90fe] to-[#9873ff] inline-block">
                                        <div className="bg-white rounded-lg px-4 py-2">
                                            <span>{job_type}</span>
                                        </div>
                                    </div>


                                </div>
                                <div className='flex items-center mb-4'>
                                    <div className='flex mr-8'>
                                        <img src={location} className='mr-2' alt="" />
                                        <span className='text-[#757575]'>{location}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <img src={dolar} className='mr-2' alt="" />
                                        <span className='text-[#757575]'>Salary: {salary}</span>
                                    </div>
                                </div>
                                <div>
                                    <button className="bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white font-semibold px-4 py-2 rounded-lg">View Details</button>
                                </div>
                            </div>

                        </div>
        </>
    );
};

export default Job;