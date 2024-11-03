import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStrodeCard } from "../Utility/localStorage";

 

const Applied_Job = () => {


    const jobs = useLoaderData();

    const [applied_Job,setApplied_Job] = useState([]);
    console.log(applied_Job);
    useEffect(() => {
        const storedJobIds = getStrodeCard();
        if (jobs.length > 0) {


            

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setApplied_Job(jobsApplied);
             
             
        }
    }, [jobs])


    return (
        <div>
            <div className="text-center py-20 bg-[#f8f7ff] bg_images">
                <h1 className="text-2xl font-bold">Applied Jobs</h1>
            </div>
            <div className='py-10'>

            </div>
        </div>
    );
};

export default Applied_Job;