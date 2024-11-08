 

const Apply = ({apply}) => {
    const {job_title,logo,salary,company_name} = apply;
    return (
        <div className="border rounded-lg p-4 mb-4">
        <div className="flex items-center">
             <div className="w-1/5 p-4">
                 <img src={logo} alt="" />
             </div>
             <div className="w-4/5">
                   <h1 className="text-2xl font-bold pb-1">{job_title}</h1>
                   <h2 className="text-lg text-[#757575] font-semibold">{company_name}</h2>
                   <p className="text-[#757575]">Salary : {salary}</p>
             </div>
        </div>
   </div>
    );
};

export default Apply;