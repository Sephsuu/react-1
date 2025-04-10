export default function Attendance() {
    // const columns
    return(
        <>
            <h6 className="fw-bold ms-1 mt-2">Employees</h6>
            <div className="table-responsive">
                <table border={ 1 } className="w-100 py-5">
                    <thead className="sticky-top">
                        <tr>
                            {
                                columns.map((column, index) => (
                                    <th className="text-center py-1 px-4" key={ index }>{ column }</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map((employee, index) => (
                            <tr className="text-center" key={ index }>
                                <td>{ employee.id }</td>
                                <td>{ employee.first_name }</td>
                                <td>{ employee.last_name }</td>
                                <td>{ employee.email }</td>
                                <td>{ employee.phone_number }</td>
                                <td>{ employee.date_of_birth }</td>
                                <td>{ employee.gender }</td>
                                <td>{ employee.address }</td>
                                <td>{ employee.position }</td>
                                <td>{ employee.hire_date }</td>
                                <td>{ employee.employment_status }</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}