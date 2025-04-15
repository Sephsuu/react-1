import { Link } from "react-router-dom";

import "./Branches.css";
import NavigationBar from "../NavigationBar/NavigationBar";

export default function Branches() {
    const branches = [
        { id: 1, name: "Naic Branch", img: "/images/kp_interior4.jpg" },
        { id: 2, name: "Tanza Branch", img: "/images/kp_interior4.jpg" },
        { id: 3, name: "Rizal Branch", img: "/images/kp_interior4.jpg" },
        { id: 4, name: "Silang Branch", img: "/images/kp_interior4.jpg" },
        { id: 5, name: "Trece Martires Branch", img: "/images/kp_interior4.jpg" },
        { id: 6, name: "Rosario Branch", img: "/images/kp_interior4.jpg" },
        { id: 1, name: "Naic Branch", img: "/images/kp_interior4.jpg" },
        { id: 2, name: "Tanza Branch", img: "/images/kp_interior4.jpg" },
        { id: 3, name: "Rizal Branch", img: "/images/kp_interior4.jpg" },
        { id: 4, name: "Silang Branch", img: "/images/kp_interior4.jpg" },
        { id: 5, name: "Trece Martires Branch", img: "/images/kp_interior4.jpg" },
        { id: 6, name: "Rosario Branch", img: "/images/kp_interior4.jpg" },
    ]
    return(
        <section className="branches_lg d-flex">
            <NavigationBar />
            
            <div className="branches d-grid w-100">
                {
                    branches.map((branch, index) => (
                        <div className="branch_card mx-auto mt-4" key={ branch.id }>
                            <div>
                                <svg viewBox="0 0 900 354" width="100%" preserveAspectRatio="none">
                                    <defs>
                                        <clipPath id="waveClip">
                                        <path d="M0 354L21.5 322C43 290 86 226 128.8 225.8C171.7 225.7 214.3 289.3 257.2 314.8C300 340.3 343 327.7 385.8 294.2C428.7 260.7 471.3 206.3 514.2 222.8C557 239.3 600 326.7 642.8 338.8C685.7 351 728.3 288 771.2 249C814 210 857 195 878.5 187.5L900 180L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z" />
                                        </clipPath>
                                    </defs>
                                    <image
                                        href={ branch.img }
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="xMidYMid slice"
                                        clipPath="url(#waveClip)"
                                    />
                                </svg>
                            </div>
                            <div className="branch_head w-100 text-center px-4 pb-5">
                                <h6 className="font-md">{ branch.name }</h6>
                                <Link className="btn font-sm">View Performance</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}