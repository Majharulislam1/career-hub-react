import { Outlet } from "react-router-dom";
import Navbar from "./Navber";
import Footer from "./Footer";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const LoadContext = createContext();

const Root = () => {

    const [job, setJob] = useState([]);
    const [appliedJob,setAppliedJob] = useState([]);
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch('../jobs.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, []);


    const handleJobApplication = (job_items) =>{
          const newJobs = [...appliedJob,job_items];
          setAppliedJob(newJobs);
           
    }

    const createUser = (email,password)=>{
      setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password)=>{
      setLoading(true);
         return signInWithEmailAndPassword(auth, email, password)
    }

    
    const LogOut = ()=>{
     return signOut(auth) ;
    }



    useEffect(()=>{
      const Unsubscribe =   onAuthStateChanged(auth, (user) => {
        setLoading(false);
           setUser(user);
      })
      return ()=> Unsubscribe;
    },[])




  const contextValue = {job,handleJobApplication,appliedJob,createUser,signIn,user,loading,LogOut};


 

    return (
        <div>
              <LoadContext.Provider value={contextValue}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
              </LoadContext.Provider>
        </div>
    );
};

export default Root;