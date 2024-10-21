import icon from '../assets/icons/accounts.png'

const Category = ({category}) => {
    const {logo,category_name,availability} =category;
    return (
        <>
            <div className="bg-[#f8f7ff] rounded-lg p-[40px]">
                      <div className='mb-4'>
                        <img src={logo} className='bg-[#efedff] rounded-lg p-3' alt="" />
                      </div>
                       <div>
                           <h3 className='text-xl font-bold text-[#474747] mb-1'>{category_name}</h3>
                           <h4 className='text-[#a3a3a3]'>{availability}</h4>
                       </div>
                 </div>
        </>
    );
};

export default Category;