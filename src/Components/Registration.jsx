import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { LoadContext } from "./Root";
import { updateProfile } from "firebase/auth";
import auth from "./firebase.config";

 

const Registration = () => {
 
       const {createUser} = useContext(LoadContext);
       const navigate = useNavigate();

       const handleRegistration=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const checkbox = e.target.checkbox.checked;


        if(checkbox === false) return toast.warning('Please arrow trams and condition');

        createUser(email,password)
         
        .then((result)=>{
             toast.success('User Successfully created');
             navigate('/');
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                 
              }).catch((error) => {
                 
              });

            
        })



       }


    return (
        <div>
            <div>

<div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
        <form onSubmit={handleRegistration} >
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input type="text" id="name" name="name" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Name" required />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
                <a href="#"
                    className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
                    Password?</a>
            </div>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <input type="checkbox" name="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Terms and Conditions</label>
                </div>
                <Link to={'/login'}
                    className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">All Ready have an account</Link>
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Registration</button>
        </form>
    </div>
</div>
<ToastContainer />
</div>
        </div>
    );
};

export default Registration;