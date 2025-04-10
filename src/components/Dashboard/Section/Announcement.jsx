import "./Announcement.css";
import { useState } from "react";

export default function Announcement() {
    const role = "Owner";
    
    let edit_logo = "", delete_logo = "";

    if (role === "Owner" || role === "Administrator") {
        edit_logo = "/images/edit.png";
        delete_logo = "/images/trash.png";
    }

    const [expanded, isExpanded] = useState(false);
    
    const setCaptionExpanded = () => {
        isExpanded(!expanded);
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

    return(
        <div className="p-2 mb-5">
            {
                announcements.map((announcement, index) => (
                    <div className="card m-2" href="#" key={ index }>
                        <div className="d-flex">
                            <div className="d-flex pt-3 px-3">
                                <div><img className="rounded-circle profile_dp" src={announcement.image.length > 0 ? announcement.image[0] : ""} alt={ announcement.user } /></div>
                                <div className="announcement_user ms-3 m-1">
                                    <h6>{ announcement.user }</h6>
                                    <p>{ announcement.role }</p>
                                </div>
                            </div>
                            <div className="ms-auto me-4 mt-2">
                                <a><img className="me-3" src={ edit_logo } width="15px" /></a>
                                <a className="btn" data-bs-toggle="modal" data-bs-target="#deleteAnnouncement"><img src={ delete_logo } width="15px" /></a>
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <div className="caption"><p className="mx-4 font-sm">{ expanded ?  announcement.message : `${announcement.message.substring(0, 100)}...` } { <a onClick={ setCaptionExpanded } href="#" className="font-t text-decoration-underline">{ expanded ? "See Less" : "See More"}</a>}</p></div>

                            <div className="w-100 announcement_image">
                            {
                                    announcement.image.length > 5 && (
                                        <div>
                                            <div className="d-flex">
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[0] } className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[1] }className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                            </div>  
                                            <div className="d-flex">
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[2] }className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[3] }className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                                <div className="image_container_more position-relative">
                                                    <a className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-white more_image">
                                                        <h2 className="m-0">{ announcement.image.length }+</h2>
                                                    </a>
                                                    <div><img src={ announcement.image[4] }className="object-fit-cover w-100 h-100" /></div>
                                                </div>
                                            </div>
                                        </div>   
                                    )
                                }
                                {
                                    announcement.image.length === 5 && (
                                        <div>
                                            <div className="d-flex">
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[0] } className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[1] }className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                            </div>  
                                            <div className="d-flex">
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[2] }className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[3] }className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[4] }className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                            </div>
                                        </div>   
                                    )
                                }
                                {
                                    announcement.image.length === 4 && (
                                        <div>
                                            <div className="d-flex">
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[0] } className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[1] }className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                            </div>  
                                            <div className="d-flex">
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[2] }className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[3] }className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                            </div>
                                        </div>   
                                    )
                                }
                                {
                                    announcement.image.length === 3 && (
                                        <div>
                                            <div className="d-flex">
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[0] } className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[1] }className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[2] }className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                            </div>  
                                        </div>   
                                    )
                                }
                                {
                                    announcement.image.length === 2 && (
                                        <div>
                                            <div className="d-flex">
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[0] } className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                                <div className="image_container_more">
                                                    <a><img src={ announcement.image[1] }className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                            </div>  
                                        </div>   
                                    )
                                }
                                {
                                    announcement.image.length === 1 && (
                                        <div>
                                            <div className="d-flex">
                                                <div className="image_container_one">
                                                    <a><img src={ announcement.image[0] } className="object-fit-cover w-100 h-100" /></a>
                                                </div>
                                            </div>  
                                        </div>   
                                    )
                                }
                            </div>
                        </div>
                        <p className="mt-2 ms-auto me-4 font-t font-sm">{announcement.date_posted}</p>
                    </div>
                ))
            }
        </div>
    );
}
