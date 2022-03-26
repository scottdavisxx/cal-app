import './App.css';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import getDay from "date-fns/getDay"
import startOfWeek from 'date-fns/startOfWeek';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, {useState} from "react";
import DatePicker from "react-datepicker"

const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

// Dummy Date
const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 3, 1),
    end: new Date(2022, 3, 1)

  },
  {
    title: "Heart Transplant",
    start: new Date(2022, 3, 1),
    end: new Date(2022, 3, 1)
    
  },
  {
    title: "Seance",
    start: new Date(2022, 3, 1),
    end: new Date(2022, 3, 1)
    
  }
]




function App() {
  return (
    <div className="App">
      <Calendar 
        localizer={localizer} 
        events={events} 
        startAccessor="start" 
        endAccessor="end"
        style={{height: 500, margin: "50px"}} />
    </div>
  );
}

export default App;
