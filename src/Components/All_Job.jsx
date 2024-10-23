import { useLoaderData } from 'react-router-dom';
import './Common.css'
import Job from './Job';
const All_Job = () => {

    const data = useLoaderData();
   

    return (
        <>
            <div className="text-center py-20 bg-[#f8f7ff] bg_images">
                <h1 className="text-2xl font-bold">All Jobs</h1>
            </div>

            <div className='max-w-6xl mx-auto '>
                <div className="grid grid-cols-2 gap-4 my-10">
                    {
                        data.map(job => <Job job={job} key={job.id}></Job>)
                    }
                </div>
            </div>

        </>
    );
};

export default All_Job;