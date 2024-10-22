import social from '../assets/icons/social.png'

const Footer = () => {
    return (
        <>
            <div className="bg-[#1a1919] py-16">
                <div className="max-w-6xl mx-auto">
                      <div className="grid grid-cols-5 items-center pb-10 border-b-[1px] border-gray-600">
                          <div className='justify-self-start'>
                             <h1 className="text-white text-[2rem] mb-5 font-semibold">Career Hub</h1>
                             <p className="text-[#ffffffb3] mb-5">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                             <img src={social} alt="" />
                         </div>    
                          <div className='justify-self-center self-start'>
                               <p className='text-white text-[1.125rem] font-bold mb-3'>Company</p>
                               <p className='text-[#ffffffb3] mb-3'>About Us</p>
                               <p className='text-[#ffffffb3] mb-3'>Work</p>
                               <p className='text-[#ffffffb3] mb-3'>Latest News</p>
                               <p className='text-[#ffffffb3] mb-3'>Careers</p>
                          </div>    
                          <div className='justify-self-center self-start'>
                               <p className='text-white text-[1.125rem] font-bold mb-3'>Product</p>
                               <p className='text-[#ffffffb3] mb-3'>Prototype</p>
                               <p className='text-[#ffffffb3] mb-3'>Plans & Pricing</p>
                               <p className='text-[#ffffffb3] mb-3'>Customers</p>
                               <p className='text-[#ffffffb3] mb-3'>Integrations</p>
                          </div>    
                          <div className='justify-self-center self-start'>
                               <p className='text-white text-[1.125rem] font-bold mb-3'>Support</p>
                               <p className='text-[#ffffffb3] mb-3'>Help Desk</p>
                               <p className='text-[#ffffffb3] mb-3'>Sales</p>
                               <p className='text-[#ffffffb3] mb-3'>Become a Partner</p>
                               <p className='text-[#ffffffb3] mb-3'>Developers</p>
                          </div>    
                          

                          <div className='justify-self-end self-start'>
                               <p className='text-white text-[1.125rem] font-bold mb-3'>Contact</p>
                               <p className='text-[#ffffffb3] mb-3'>524 Broadway , NYC</p>
                               <p className='text-[#ffffffb3] mb-3'>+1 777 - 978 - 5570</p>
                          </div>    
                               
                      </div>
                      <div className='flex justify-between pt-10'>
                           <p className='text-[#ffffff66]'>@2023 CareerHub. All Rights Reserved</p>
                           <p className='text-[#ffffff66]'>Powered by <span className='font-bold'>CareerHub</span></p>
                      </div>
                </div>
            </div>
        </>
    );
};

export default Footer;