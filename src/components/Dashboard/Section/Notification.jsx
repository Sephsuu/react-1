import "./Notification.css";
import { useState } from "react";

export default function Notification() {
    const role = "Owner";
    
        let edit_logo = "", delete_logo = "", add_logo = "", filter = false;
    
        if (role === "Owner" || role === "Administrator") {
            edit_logo = "/images/edit.png";
            delete_logo = "/images/trash.png";
            add_logo = "/images/plus.png";
            filter = true;
        }
    
        const [expanded, isExpanded] = useState(false);
        
        const setCaptionExpanded = () => {
            isExpanded(!expanded);
        }
    
        const [selected, selectedContent] = useState("announcements");
    
        const setSelectedContent = (content) => {
            selectedContent(content);
        };
    
        const [expandFilter, expandedFilter] = useState(false);
    
        const setFilterExpanded = () => {
            expandedFilter(!expandFilter)
        }
    
        let announcements = [
            {
                user: "King Boss Teng",
                role: "Administrator",
                message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sunt a nemo explicabo cumque doloribus minus sint facilis quasi voluptatibus culpa, earum saepe nihil rem, quibusdam beatae, ex officia tempore.",
                image: ["/images/okotok.png"],
                date_posted: "January 1, 2004"
            },
            {
                user: "King Boss Teng",
                role: "Owner",
                message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sunt a nemo explicabo cumque doloribus minus sint facilis quasi voluptatibus culpa, earum saepe nihil rem, quibusdam beatae, ex officia tempore.",
                image: ["/images/okotok.png", "/images/okotok.png"],
                date_posted: "January 1, 2004"
            },
            {
                user: "King Boss Teng",
                role: "Owner",
                message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sunt a nemo explicabo cumque doloribus minus sint facilis quasi voluptatibus culpa, earum saepe nihil rem, quibusdam beatae, ex officia tempore.",
                image: ["/images/okotok.png", "/images/okotok.png", "/images/okotok.png"],
                date_posted: "January 1, 2004"
            },
            {
                user: "King Boss Teng",
                role: "Owner",
                message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sunt a nemo explicabo cumque doloribus minus sint facilis quasi voluptatibus culpa, earum saepe nihil rem, quibusdam beatae, ex officia tempore.",
                image: ["/images/okotok.png", "/images/okotok.png", "/images/okotok.png", "/images/okotok.png"],
                date_posted: "January 1, 2004"
            },
            {
                user: "King Boss Teng",
                role: "Owner",
                message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sunt a nemo explicabo cumque doloribus minus sint facilis quasi voluptatibus culpa, earum saepe nihil rem, quibusdam beatae, ex officia tempore.",
                image: ["/images/okotok.png", "/images/okotok.png", "/images/okotok.png", "/images/okotok.png", "/images/okotok.png"],
                date_posted: "January 1, 2004"
            },
            {
                user: "King Boss Teng",
                role: "Owner",
                message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sunt a nemo explicabo cumque doloribus minus sint facilis quasi voluptatibus culpa, earum saepe nihil rem, quibusdam beatae, ex officia tempore.",
                image: ["/images/okotok.png", "/images/okotok.png", "/images/okotok.png", "/images/okotok.png", "/images/okotok.png", "/images/okotok.png"],
                date_posted: "January 1, 2004"
            },
        ];
    
        let notifications = [
            {
                id: 1,
                user: "King Boss Teng",
                image: "/images/okotok.png",
                role: "Branch Owner",
                activity: "Inventory has been updated.",
                branch: "Naic Branch",
                date_posted: "September 30, 2004"
            },{
                id: 2,
                user: "John Doe",
                image: "/images/okotok.png",
                role: "Branch Owner",
                activity: "Inventory has been updated.",
                branch: "Naic Branch",
                date_posted: "September 30, 2004"
            },{
                id: 3,
                user: "John Doe",
                image: "/images/okotok.png",
                role: "Branch Owner",
                activity: "Inventory has been updated.",
                branch: "Naic Branch",
                date_posted: "September 30, 2004"
            },{
                id: 4,
                user: "John Doe",
                image: "/images/okotok.png",
                role: "Branch Owner",
                activity: "Inventory has been updated.",
                branch: "Naic Branch",
                date_posted: "September 30, 2004"
            },
        ];
    
        const deleteNotification = (id) => {
            notifications = notifications.filter(item => item.id !== id);
            console.log(notifications);
            
        }

    return(
        <div className="p-2 mb-5 d-flex flex-column">
            <a className="filter_mobile btn d-none ms-auto me-4" href="#" onClick={ setFilterExpanded }>
                <p className="fw-normal font-sm mt-1">Filter</p>
                <div className="ms-2"><img src="/images/down.png" alt="Down" width="12px" /></div>
            </a>
            <div className={expandFilter ? "filter filter_md flex-column d-none d-flex justify-content-center align-items-center me-2 mt-5" : "d-none"}>
                <a className="pt-2 btn">Newest</a>
                <a href="#" className="btn">By month</a>
                <a className="pb-2 btn">By branch</a>
            </div>
            {
                notifications.map((notification, index) => (
                    <div className="card m-1" href="#" key={ index }>
                        <div className="d-flex px-3 pt-3">
                            <div className="d-flex">
                                <div><img className="rounded-circle profile_dp" src={notification.image ? notification.image : ""} alt={ notification.user } /></div>
                                <div className="announcement_user ms-3 m-1">
                                    <h6>{ notification.user }</h6>
                                    <p>{ notification.branch }</p>
                                </div>
                            </div>
                            <div className="ms-auto">
                                <a className="btn" data-bs-toggle="modal" data-bs-target={`#deleteNotification${ notification.id}`}><img src={ delete_logo } width="15px" /></a>
                                {/* <span class="badge text-bg-dark">{ notification.branch }</span> */}
                            </div>
                        </div>
                        <div>
                            <div className="caption ms-4"><a className="font-t btn text-decoration-underline font-md">{ notification.activity }</a></div>
                        </div>
                        <p className="mt-2 ms-auto me-4 font-t font-sm">{notification.date_posted}</p>

                        <div className="modal fade" id={`deleteNotification${ notification.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-body d-flex justify-content-center">
                                    <h6>Are you sure to delete this notification? { notification.id }</h6>
                                </div>
                                <div className="d-flex justify-content-center mb-4">
                                    <button type="button" className="btn btn-black font-sm py-1 px4 mx-2" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-red font-sm py-1 px-4 fw-bold mx-2" onClick={ () => deleteNotification(notification.id) } data-bs-dismiss="modal">Delete</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}