import Head from "./Dashboard/Head";
import Body from "./Dashboard/Body";
import Tail from "./Dashboard/Tail";
import { useState } from "react";

export default function HrDashboard(props) {
    const [selectedEmployee, setSelectedEmployee] = useState(1);
    return(
        <section className="hr_dashboard d-flex w-100">
            <Head employees={ props.employees } selectedEmployee={ selectedEmployee } setSelectedEmployee={ setSelectedEmployee } />
            <Body />
            <Tail employees={ props.employees } selectedEmployee={ selectedEmployee } />
        </section>
    );
}