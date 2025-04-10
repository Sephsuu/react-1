import "./Sidebar.css";

import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
    const [isHidden, setHidden] = useState(() => {
        const savedState = localStorage.getItem("sidebarHidden");
        return savedState === "true";
    });

    const hideSidebar = () => {
        setHidden(prevState => {
            const newState = !prevState;
            localStorage.setItem("sidebarHidden", newState);
            return newState;
        });
    };

    return(
        <div className={`sidebar px-5 pt-2 ${isHidden ? "hide_sidebar" : ""}`}>
            <button className="arrow btn" onClick={hideSidebar}>
                <img src={isHidden ? "/images/right-arrow.png" : "/images/left-arrow.png"} alt="Left Arrow" width="30px" />
            </button>
            <div className="button_group d-flex flex-column text-center justify-content-center">
                <Link className="mb-4 papiverse_logo" to="/dashboard" >
                    <img className="papiverse_logo" src="/images/papiverse_logo.png" alt="" />
                </Link>
                {
                    props.routes.map((item, index) => {
                    const path = Object.keys(item)[0];
                    const nav = item[path]; 
                    return ( <Link key={ index } to={ path } className="btn">{ nav[1] }</Link> );
                    })
                }
            </div>
        </div>
    );
}