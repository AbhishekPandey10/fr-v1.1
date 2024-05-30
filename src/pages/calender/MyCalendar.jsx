import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './MyCalendar.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('New Event Name');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  const handleSelectEvent = (event) => {
    const confirmDelete = window.confirm(`Do you want to delete the event: ${event.title}?`);
    if (confirmDelete) {
      setEvents(events.filter(e => e !== event));
    }
  };

  return (
    <>
      <Topbar />
    <div className="pageContainer">
      <div className="contentContainer">
        <Sidebar />
        <div className="calendarContainer">
          <div className="calendarWrapper">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500, width: '100%' }}
              selectable
              onSelectSlot={handleSelectSlot}
              onSelectEvent={handleSelectEvent}
              popup
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyCalendar;
