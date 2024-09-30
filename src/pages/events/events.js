// Todo
// date selection: calender click show event details
// phone view

import React, { useState, useEffect } from "react";
import "./events.css";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

const localizer = momentLocalizer(moment);

const select_date_handler = ({ start, end }) => {
  alert(`Selected from ${start} to ${end}`);
};

const calender_event = ({ event }) => (
  <a href={event.url} target="_blank" rel="noreferrer">
    <div className="calender-event-content">
      <strong>{event.title}</strong>
    </div>
  </a>
);

const Events = () => {
  const [event_list, setEventList] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/event/list"
        );
        console.log(response);
        setEventList(response.data["data"]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    console.log(event_list);

    var tmp_events = event_list.map((event) => ({
      event_id: event[0],
      title: event[1],
      start: new Date(event[2]),
      end: new Date(event[3]),
      url: event[4],
      has_cover: event[7],
    }));

    setEvents(tmp_events);
  }, [event_list]);

  return (
    <div className="app-container">
      <div className="left-panel">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600, width: "100%" }}
          views={["day", "week", "month", "agenda"]}
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
          <a key={index} href={event.url} target="_blank" rel="noreferrer">
            {event.has_cover ? (
              <img
                src={"api/event/serve_cover/" + event.event_id}
                alt={event.title}
                className="event-cover"
              />
            ) : (
              <div style={{ position: "relative" }}>
                <img
                  src={"http://127.0.0.1:5000/api/event/serve_cover/0"}
                  alt={event.title}
                  className="event-cover"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "black",
                    fontSize: "32px",
                  }}
                >
                  {event.title}
                </div>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Events;
