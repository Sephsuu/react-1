import "./HrDashboard.css";

export default function Tail(props) {
    const employee = props.employees.find((e) => e.id === props.selectedEmployee);
    return(
        <section className="tail d-flex flex-column m-1">
            <div className="d-flex justify-content-center mt-2"><img src="/images/okotok.png" className="rounded-circle" /></div>
            <h6 className="mt-2 font-md text-center">{ employee.last_name } { employee.first_name }</h6>
            <p className="font-sm font-t text-center">{ employee.position }</p>
            <h6 className="text-start ms-2 mt-4">More Information:</h6>
            <div className="d-flex justify-content-between mx-2">
                <div className="d-flex"><i className="fa-solid fa-cake-candles"></i><p className="font-t font-sm ms-2">Date of Birth:</p></div>
                <div className="font-s font-sm">{ employee.date_of_birth }</div>
            </div>
            <div className="d-flex justify-content-between mx-2">
                <div className="d-flex"><i className="fa-solid fa-venus-mars"></i><p className="font-t font-sm ms-2">Gender:</p></div>
                <div className="font-s font-sm">{ employee.gender }</div>
            </div>
            <div className="d-flex justify-content-between mx-2">
                <div className="d-flex"><i className="fa-solid fa-phone"></i><p className="font-t font-sm ms-2">Contact Number:</p></div>
                <div className="font-s font-sm">{ employee.phone_number }</div>
            </div>
            <div className="d-flex justify-content-between mx-2">
                <div className="d-flex"><i className="fa-solid fa-cake-candles"></i><p className="font-t font-sm ms-2">E-mail Address:</p></div>
                <div className="font-s font-sm">{ employee.email }</div>
            </div>
            <div className="d-flex justify-content-between mx-2">
                <div className="d-flex"><i className="fa-solid fa-location-dot"></i><p className="font-t font-sm ms-2">Address:</p></div>
                <div className="font-s font-sm">{ employee.address }</div>
            </div>
        </section>
    );
} 