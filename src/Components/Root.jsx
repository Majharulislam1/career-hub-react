import { Outlet } from "react-router-dom";
import Navbar from "./Navber";
import Footer from "./Footer";

 

const Root = () => {
    return (
        <div>
              <Navbar></Navbar>
              <Outlet></Outlet>
              <Footer></Footer>
        </div>
    );
};

export default Root;