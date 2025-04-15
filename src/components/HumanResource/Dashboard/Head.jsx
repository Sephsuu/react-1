import { useEffect, useState } from "react";

import "./HrDashboard.css";

export default function Head(props) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 991px)');

        const handleResize = () => setIsMobile(mediaQuery.matches);

        handleResize();

        mediaQuery.addEventListener('change', handleResize);

        return () => {
        mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    const [active, setActive] = useState(1);
    const [toggleEmployees, setToggleEmployees] = useState(false);

    const handleClick = (employeeId) => {
        setActive(employeeId);
        props.setSelectedEmployee(employeeId);
        setToggleEmployees(!toggleEmployees)
    }

    const employee = props.employees.find((e) => e.id === props.selectedEmployee);
    return(
        <section className="head mt-2 overflow-y-auto mx-1">
            <button onClick={ () => setToggleEmployees(!toggleEmployees) } className="head_employee py-2 btn d-none justify-content-center w-100 sticky-top"><i className="fa-solid fa-bars"></i><h6 className="ms-2">{ employee.last_name }, { employee.first_name }</h6></button>

            <div className={`${ isMobile ? "head_employees" : ""}${ toggleEmployees ? "" : " head_employees_hide"}`}>
                {
                    props.employees.map((employee, index) => (
                        <button onClick={ () => handleClick(employee.id) } className={ `btn d-flex align-items-center w-100 ${active === employee.id ? "active" : ""}`} key={ employee.id }>
                            <div className="mt-1"><img src={ employee.img } className="head_img rounded-circle" /></div>
                            <div className="text-start pt-3">
                                <h6 className="ms-2"><strong>{ employee.last_name}, </strong>{ employee.first_name }</h6>
                                <p className="font-sm ms-2">{ employee.position }</p>
                            </div>
                        </button>
                    ))
                }
            </div>
        </section>
    );
}