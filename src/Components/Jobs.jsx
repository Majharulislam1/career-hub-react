
import { useEffect, useState } from 'react';
import Job from './Job';

const Jobs = () => {

    const [job, setJob] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])


    return (
        <>
            <div className="max-w-6xl mx-auto">
                <div className="my-10">
                    <div className="text-center mb-6">
                        <h1 className="text-[2rem] font-semibold">Featured Jobs</h1>
                        <p className="text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-10">
                        {
                            job.slice(1, 5).map(job => <Job job={job} key={job.id}></Job>)
                        }
                    </div>

                    <div className='text-center'>
                        <button className="bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white font-semibold px-4 py-2 rounded-lg">See all jobs</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Jobs;