import { useState } from "react";
import { Link } from 'react-router-dom';

import "./HumanResource.css";
import "../../assets/css/Table.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import ButtonGroup from "../widgets/ButtonGroup";
import Employees from "./Table/Employees";
import Attendance from "./Table/Attendance";
import Paychecks from "./Table/Paychecks";

export default function HumanResource() {
    const [isHidden, setHidden] = useState(() => {
        const savedState = localStorage.getItem("buttonGroupHidden");
        return savedState === "true";
    });

    const hideButtonGroup = () => {
        setHidden(prevState => {
            const newState = !prevState;
            localStorage.setItem("buttonGroupHidden", newState);
            return newState;
        });
    };

    const hrCount = 100

    const [selectedTable, setSelectedTable] = useState("Total Employees");
    return(
        <div className="d-flex w-100">
            <NavigationBar />

            <div className="hr w-100 pb-5 overflow-x-hidden overflow-y-auto">
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn toggle_hide d-flex align-items-center" onClick={ () => hideButtonGroup() }>
                        <h5 className="fw-bold mt-2">Human Resource</h5> 
                        <div className="ms-2"><img src="/images/down.png" width="10px" /></div>
                    </button>
                    <Link to="/dashboard" className="home_btn me-4 d-none"><img src="/images/home.png" width="15px" /></Link>
                </div>
                <div className={ isHidden ? "d-none" : "hr_button_group d-grid" }>
                    <ButtonGroup imagePath="/images/employee.png" count={ hrCount } description="Total Employees" setSelectedTable={ setSelectedTable }></ButtonGroup>
                    <ButtonGroup imagePath="/images/attendance.png" description="Attendance" setSelectedTable={ setSelectedTable }></ButtonGroup>
                    <ButtonGroup imagePath="/images/paycheck.png" description="Payroll/Paycheck" setSelectedTable={ setSelectedTable }></ButtonGroup>
                </div>

                {
                    selectedTable === "Total Employees" ? (
                        <Employees />
                    ) : selectedTable === "Attendance" ? (
                        <Attendance />
                    ) : (
                        <Paychecks />
                    )
                }
            </div>
        </div>
    );
}