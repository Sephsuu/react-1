import "./Dashboard.css";
import { useState, useEffect, useRef } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { use } from "react";
import Announcement from "./Section/Announcement";
import Notification from "./Section/Notification";

export default function Dashboard() {

    const role = "Owner";

    let add_logo = "", filter = false;

    if (role === "Owner" || role === "Administrator") {
        add_logo = "/images/plus.png";
        filter = true;
    }

    const [selectedContent, setSelectedContent] = useState("announcements");

    const [expandFilter, expandedFilter] = useState(false);

    const setFilterExpanded = () => {
        expandedFilter(!expandFilter)
    }

    return(
        <div className="dashboard_lg d-flex w-100">

            <NavigationBar />

            <div className="announcements">
                <div className="d-flex mt-4">
                    <div><h4 className="ms-4 font-md">Announcements</h4></div>
                    <div className="ms-auto me-5">
                        <button className="btn"><img src={ add_logo } width="20px" /></button>
                    </div>
                </div>

                <Announcement />
            </div>

            <div className="notifications">
                <div className="d-flex mt-4">
                    <div><h4 className="ms-4 font-md">Notifications</h4></div>
                    {filter && (
                        <button className="btn d-flex ms-auto me-5" href="#" onClick={ setFilterExpanded }>
                            <p className="fw-normal font-sm mt-1">Filter</p>
                            <div className="ms-2"><img src="/images/down.png" alt="Down" width="12px" /></div>
                        </button>
                    )}
                </div>
                <div className={expandFilter ? "filter flex-column d-flex justify-content-center align-items-center me-2" : "d-none"}>
                    <a className="pt-2" href="#">Newest</a>
                    <a href="#">By month</a>
                    <a className="pb-2" href="#">By branch</a>
                </div>

                <Notification />
            </div>

            <div className="dashboard_md w-100 d-none">
                <div className="navbar_top flex-column w-100 sticky-top py-2">
                    <div className="d-flex justify-content-center w-100 mb-2">
                        <a href="#"><img src="/images/papiverse_logo.png" alt="Papiverse" width="120px" /></a>
                    </div>
                    <div className="d-flex justify-content-evenly">
                        <button className="btn px-2" onClick={() => setSelectedContent("announcements") } href="#"><h6>Announcements</h6></button>
                        <button className="btn px-2" onClick={() => setSelectedContent("notifications") } href="#"><h6>Notifications</h6></button>
                    </div>
                </div>

                <div>
                    { selectedContent === "announcements" ? (
                        <Announcement />
                    ) : selectedContent === "notifications" ? (
                        <Notification />
                    ) : null }
                </div>
            </div>

            <div className="modal fade" id="deleteAnnouncement" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-body d-flex justify-content-center">
                        <h6>Are you sure to delete this announcement?</h6>
                    </div>
                    <div className="d-flex justify-content-center mb-4">
                        <button type="button" className="btn btn-black font-sm py-1 px4 mx-2" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-red font-sm py-1 px-4 fw-bold mx-2">Delete</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>

        
    )
}
