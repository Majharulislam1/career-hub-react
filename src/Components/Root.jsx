import { Outlet } from "react-router-dom";
import Navbar from "./Navber";
import Footer from "./Footer";
import { createContext, useEffect, useState } from "react";


export const LoadContext = createContext();

const Root = () => {

    const [job, setJob] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])



    return (
        <div>
              <LoadContext.Provider value={job}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
              </LoadContext.Provider>
        </div>
    );
};

export default Root;