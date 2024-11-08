 
import { useParams } from "react-router-dom";
import { LoadContext } from "./Root";
import { useContext, useEffect, useState } from "react";
import Apply from "./Apply";

 

const Applied_Job = () => {

 
    const {jobs,appliedJob} = useContext(LoadContext);
     

    useEffect(() => {
        //  console.log(appliedJob);
    }, [appliedJob]);
    
    if(!appliedJob){
        return <span>Loading-----</span>
    }


    return (
        <div>
            <div className="text-center py-20 bg-[#f8f7ff] bg_images">
                <h1 className="text-2xl font-bold">Applied Jobs</h1>
            </div>
            <div className='py-10'>
                   <div className="w-4/5 mx-auto">
                         
                         {
                            appliedJob.map(jb => <Apply key={jb.id} apply={jb}></Apply>)
                         }

                   </div>
            </div>
        </div>
    );
};

export default Applied_Job;