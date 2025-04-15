import { useState } from "react";

import "./MessageBar.css";

export default function MessageBar(props) {
    const handleClick = (branch) => {
        props.setMessageBarStatus(!props.messageBarStatus);
        props.setSelectedBranch(branch.id)
    }
    return(
        <section className={ props.messageBarStatus ? "hide_msg_bar py-4" : "message_bar py-4" }>
            <button onClick={ () => props.setMessageBarStatus(!props.messageBarStatus) } className="x btn w-100 d-none justify-content-end"><i className="fa-solid fa-x me-3"></i></button>
            {
                props.branches.map((branch) => (
                    <button className="btn d-flex justify-content-start align-items-center py-2 ps-2 pe-4 w-100" onClick={ () => handleClick(branch) } key={ branch.id }>
                        <div><img src={ branch.img } className="rounded-circle branch_dp" /></div>
                        <h6 className="ms-2 fw-bold">{ branch.branch }</h6>
                    </button>
                )) 
            }
        </section>
    );
}