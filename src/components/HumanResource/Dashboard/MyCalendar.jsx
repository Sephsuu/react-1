import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const handlePrevMonth = () => {
    const newDate = new Date(date.setMonth(date.getMonth() - 1));
    setDate(new Date(newDate));
  };

  const handleNextMonth = () => {
    const newDate = new Date(date.setMonth(date.getMonth() + 1));
    setDate(new Date(newDate));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevMonth}>⬅️ Prev</button>
        <span className="font-bold text-lg">
          {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </span>
        <button onClick={handleNextMonth}>Next ➡️</button>
      </div>
      <Calendar value={date} onChange={setDate} />
    </div>
  );
}