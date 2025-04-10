export default function Paychecks() {
    const columns = ["Employee ID", "Full Name", "Position", "Gross Salary", "Deductions", "Net Pay", "Date of Payment"];
    const paychecks = [
        {
          employeeId: 1,
          name: "Alice Santos",
          position: "Software Engineer",
          grossSalary: 80000,
          deductions: 5000,
          netPay: 75000,
          payDate: "2025-04-01"
        },
        {
          employeeId: 2,
          name: "Brian Cruz",
          position: "UI/UX Designer",
          grossSalary: 60000,
          deductions: 4000,
          netPay: 56000,
          payDate: "2025-04-01"
        },
        {
          employeeId: 3,
          name: "Carla Reyes",
          position: "Project Manager",
          grossSalary: 95000,
          deductions: 7000,
          netPay: 88000,
          payDate: "2025-04-01"
        },
        {
          employeeId: 4,
          name: "Daniel Gomez",
          position: "QA Analyst",
          grossSalary: 55000,
          deductions: 3000,
          netPay: 52000,
          payDate: "2025-04-01"
        },
        {
          employeeId: 5,
          name: "Ella Navarro",
          position: "HR Specialist",
          grossSalary: 62000,
          deductions: 4500,
          netPay: 57500,
          payDate: "2025-04-01"
        }
    ];
    return(
        <div>
            <h6 className="fw-bold ms-1 mt-2">Paychecks</h6>
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
                        paychecks.map((paycheck, index) => (
                            <tr className="text-center" key={ index }>
                                <td>{ paycheck.employeeId }</td>
                                <td>{ paycheck.name }</td>
                                <td>{ paycheck.position }</td>
                                <td>{ paycheck.grossSalary }</td>
                                <td>{ paycheck.deductions }</td>
                                <td>{ paycheck.netPay }</td>
                                <td>{ paycheck.payDate }</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}