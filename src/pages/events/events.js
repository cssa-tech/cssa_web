// To implement
// 1. event time
// 2. date selection
// 3. phone view


import React from 'react';
import './events.css'

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import event_list from './event_list.json';


const localizer = momentLocalizer(moment);


const select_date_handler = ({ start, end }) => {
  alert(`Selected from ${start} to ${end}`);
};


const calender_event = ({ event }) => (
    <a 
      href={event.url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="calender-event-content">
        <strong>{event.title}</strong>
      </div>
    </a>
);


const Events = () => {
  const events = event_list.sort((a, b) => new Date(a.date) - new Date(b.date)).map(event => ({
    title: event.title,
    start: new Date(event.date),
    end: new Date(event.date),
    cover_path: event.cover_path,
    url: event.url,
  }));
  

  return (
    <div className="app-container">
      <div className="left-panel">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600, width: '100%' }}
          views={['day', 'week', 'month', 'agenda']}
          defaultView="month"
          toolbar={true}
          selectable
          onSelectSlot={select_date_handler}
          popup
          components={{
            event: calender_event,
          }}
        />
      </div>

      <div className="right-panel">
        <h2 className="right-panel-header">Recent Events</h2>
        {events.map((event, index) => (
          <a 
            key={index}
            href={event.url}
            target="_blank" 
            rel="noreferrer"
          >
            <img
              src={event.cover_path}
              alt={event.title}
              className="event-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Events;