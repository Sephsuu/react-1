import { useState } from "react";

export default function Employees() {
    const columns = ["Employee ID", "Last Name", "First Name", "Email Address", "Contact Number", "Date of Birth", "Gender", "Address", "Position", "Hire Date", "Status"];
    const employees = [
        {
          id: 1,
          first_name: "John",
          last_name: "Doe",
          email: "john.doe@company.com",
          phone_number: "09171234567",
          date_of_birth: "1990-05-20",
          gender: "Male",
          address: "123 Main Street, Cavite",
          position: "Software Engineer",
          hire_date: "2020-01-15",
          employment_status: "Active",  
        },
        {
          id: 2,
          first_name: "Jane",
          last_name: "Smith",
          email: "jane.smith@company.com",
          phone_number: "09181234567",
          date_of_birth: "1988-10-02",
          gender: "Female",
          address: "456 Elm Street, Tagaytay",
          position: "HR Manager",
          hire_date: "2018-03-10",
          employment_status: "Active",
        },
        {
          id: 3,
          first_name: "Michael",
          last_name: "Tan",
          email: "michael.tan@company.com",
          phone_number: "09991234567",
          date_of_birth: "1995-12-11",
          gender: "Male",
          address: "789 Oak Street, Dasmariñas",
          position: "Marketing Specialist",
          hire_date: "2021-06-01",
          employment_status: "Probationary",
        },
        {
          id: 4,
          first_name: "Alyssa",
          last_name: "Reyes",
          email: "alyssa.reyes@company.com",
          phone_number: "09193456789",
          date_of_birth: "1992-04-05",
          gender: "Female",
          address: "101 Pine St, Silang",
          position: "UI/UX Designer",
          hire_date: "2019-09-23",
          employment_status: "Active",
        },
        {
          id: 5,
          first_name: "Carlos",
          last_name: "Dela Cruz",
          email: "carlos.delacruz@company.com",
          phone_number: "09221234567",
          date_of_birth: "1985-07-07",
          gender: "Male",
          address: "202 Mango Ave, Indang",
          position: "Finance Officer",
          hire_date: "2016-05-18",
          employment_status: "Active",
        },
    ];
      
    return (
        <div>
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
        </div>
    )
}