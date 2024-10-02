// Todo
// phone view

import React, { useState, useEffect } from "react";
import "./events.css";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

const tmp_server_url = "http://127.0.0.1:5000";

const localizer = momentLocalizer(moment);

const Events = () => {
  const [event_list, setEventList] = useState([]);
  const [events, setEvents] = useState([]);
  const [selected_events, setSelectedEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(tmp_server_url + "/api/event/list");
        console.log(response);
        setEventList(response.data["data"]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    console.log(events);

    var tmp_events = events.filter((event) => {
      const now = new Date();
      return event.end >= now;
    });

    setSelectedEvents(tmp_events);
  }, [events]);

  const select_date_handler = ({ start, end }) => {
    console.log(`Selected from ${start} to ${end}`);
    var tmp_events = events.filter((event) => {
      const start_time = new Date(start);
      const end_time = new Date(end);
      return (
        (event.start >= start_time && event.end <= end_time) ||
        (event.start <= start_time && event.end >= start_time) ||
        (event.start <= end_time && event.end >= end_time)
      );
    });

    setSelectedEvents(tmp_events);
  };

  const calender_event = ({ event }) => {
    return (
      <div onClick={() => setSelectedEvents([event])}>
        <h>{event.title}</h>
      </div>
    );
  };

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
        {selected_events.map((event, index) => (
          <a key={index} href={event.url} target="_blank" rel="noreferrer">
            {event.has_cover ? (
              <img
                src={
                  tmp_server_url +
                  `/api/event/serve_cover/${event.event_id}.png`
                }
                alt={event.title}
                className="event-cover"
              />
            ) : (
              <div style={{ position: "relative" }}>
                <img
                  src={tmp_server_url + "/api/event/serve_cover/0.png"}
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
