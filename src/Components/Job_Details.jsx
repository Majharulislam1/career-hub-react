import { useLoaderData, useParams } from 'react-router-dom';
import './Common.css'
 

const Job_Details = () => {

    const { id } = useParams();

    const data = useLoaderData();

    const find_job = data.find(job_id => job_id.id === parseInt(id));

    const { job_title, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = find_job;




    return (
        <>
            <div className="text-center py-20 bg-[#f8f7ff] bg_images">
                <h1 className="text-2xl font-bold">Job Details</h1>
            </div>
            <div className='py-10'>

            </div>
            <div className='max-w-6xl mx-auto'>
                <div className='flex  gap-5 my-5'>
                    <div className='w-8/12'>
                        <p className='text-[#757575] py-6 text-justify'>
                            <strong className='text-black'>Job Description : </strong>
                             {job_description}
                        </p>

                        <p className='text-[#757575] py-6 text-justify'>
                            <strong className='text-black'>Job Responsibility: </strong>
                            {
                                job_responsibility
                            }
                        </p>
                        <p className='py-4'>
                            <strong>Educational Requirements:</strong>
                        </p>

                        <p className='text-[#757575]'>
                            {
                                educational_requirements
                            }
                        </p>
                        <p className='py-4'>
                            <strong>Experiences:</strong>
                        </p>

                        <p className='text-[#757575]'>
                            {
                                experiences
                            }
                        </p>
                    </div>
                    <div className='w-4/12'>
                         <div className='rounded-lg bg-gradient-to-r mb-4 p-6 from-[rgba(126,144,254,0.1)] to-[rgba(152,115,255,0.1)]'>
                               <h1 className='font-semibold text-[1.125rem] pb-3 border-b-[1px] border-[#9f7cfe]'>Job Details</h1>
                                <div className='py-3'>
                                       <h2 className='text-[#757575]'><strong className='text-black'>Salary : </strong>{salary}</h2>
                                       <h2 className='text-[#757575]'><strong className='text-black'>Job Title : </strong> {job_title}</h2>
                                </div>

                                <h1 className='font-semibold text-[1.125rem]  pb-3 border-b-[1px] border-[#9f7cfe]'>Contact Information</h1>
                                <div className='py-3'>
                                       <h2 className='text-[#757575]'><strong className='text-black'>Phone : </strong>{contact_information.phone}</h2>
                                       <h2 className='text-[#757575]'><strong className='text-black'>E-mail : </strong> {contact_information.email}</h2>
                                       <h2 className='text-[#757575]'><strong className='text-black'>Address : </strong> {contact_information.address}</h2>
                                </div>
                         </div>

                         <div>
                             <button className='text-center py-4 w-full font-semibold rounded-lg text-white  bg-gradient-to-r from-[rgb(126,144,254)] to-[rgb(152,115,255)]'>Apply Now</button>
                         </div>
                    </div>
                </div>
            </div>

            <div className='py-10'>

            </div>
        </>
    );
};

export default Job_Details;