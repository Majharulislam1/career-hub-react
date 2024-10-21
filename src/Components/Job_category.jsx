import { useEffect, useState } from 'react';
import Category from './Category';


const Job_category = () => {

    const [categorys,setCategory] = useState([]);
    useEffect(()=>{
         fetch('categories.json')
         .then(res => res.json())
         .then(data => setCategory(data))
    },[])

    return (
        <>
            <div className="max-w-6xl mx-auto">
            <div className="text-center py-8 mt-4">
                <h1 className="text-[3rem] font-semibold mb-2">Job Category List</h1>
                <p className="text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                 {
                    categorys.map(category => <Category category={category} key={category.id}></Category>)
                 }
            </div>
            </div>
        </>
    );
};

export default Job_category;