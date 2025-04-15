import { useEffect } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Body() {
    const [date, setDate] = useState(new Date());
    
    const handlePrevMonth = () => {
    const newDate = new Date(date.setMonth(date.getMonth() - 1));
    setDate(new Date(newDate));
    };

    const handleNextMonth = () => {
    const newDate = new Date(date.setMonth(date.getMonth() + 1));
    setDate(new Date(newDate));

    };

    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].map(el => new window.bootstrap.Tooltip(el));
    }, []);
    return(
        <section className="d-flex flex-column body">
            <div className="salary font-md font-lg text-center my-2">Salary: ₱10,000.00/ ₱300.99</div>
            <div className="progress-stacked rounded-pill">
                <div className="progress" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="16 hours" role="progressbar" aria-label="Segment one" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%"}}>
                    <div className="progress-bar bg-darkred py-2">Absent</div>
                </div>
                <div className="progress" data-bs-toggle="tooltip" data-bs-placement="bottom" title="315 hours" role="progressbar" aria-label="Segment three" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%"}}>
                    <div className="progress-bar bg-skyblue">Workday</div>
                </div>
            </div>
            <Calendar value={date} onChange={setDate} />
        </section>


    );
}