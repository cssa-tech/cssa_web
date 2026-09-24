import React, { useEffect, useMemo, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/zh-cn";
import axios from "axios";
import { FiArrowUpRight } from "react-icons/fi";
import "react-big-calendar/lib/css/react-big-calendar.css";
import PageHeader from "../../components/PageHeader";
import "./events.css";

// TODO: point this at the deployed backend
const SERVER_URL = "http://127.0.0.1:5000";

moment.locale("zh-cn");
const localizer = momentLocalizer(moment);

const CAL_MESSAGES = {
  today: "今天",
  previous: "上一页",
  next: "下一页",
  month: "月",
  week: "周",
  day: "日",
  agenda: "列表",
  date: "日期",
  time: "时间",
  event: "活动",
  noEventsInRange: "这段时间没有活动",
  showMore: (n) => `还有 ${n} 个`,
};

const formatRange = (start, end) => {
  const s = moment(start);
  const e = moment(end);
  if (s.isSame(e, "day")) return `${s.format("M月D日 dddd HH:mm")} – ${e.format("HH:mm")}`;
  return `${s.format("M月D日 HH:mm")} – ${e.format("M月D日 HH:mm")}`;
};

const EventItem = ({ event }) => {
  const s = moment(event.start);
  return (
    <li className="ev_item">
      <div className="ev_date" aria-hidden="true">
        <span className="ev_month">{s.format("M月")}</span>
        <span className="ev_day">{s.format("D")}</span>
        <span className="ev_weekday">{s.format("ddd")}</span>
      </div>
      <div className="ev_body">
        {event.has_cover ? (
          <img
            className="ev_cover"
            src={`${SERVER_URL}/api/event/serve_cover/${event.event_id}.png`}
            alt=""
            loading="lazy"
          />
        ) : null}
        <h3 className="ev_title">{event.title}</h3>
        <p className="ev_time">{formatRange(event.start, event.end)}</p>
        {event.url && (
          <a className="text_link ev_link" href={event.url} target="_blank" rel="noreferrer">
            活动详情 <FiArrowUpRight />
          </a>
        )}
      </div>
    </li>
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [range, setRange] = useState(null); // { start, end } picked on the calendar

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/event/list`);
        const rows = response.data?.data || [];
        setEvents(
          rows.map((event) => ({
            event_id: event[0],
            title: event[1],
            start: new Date(event[2]),
            end: new Date(event[3]),
            url: event[4],
            has_cover: event[7],
          }))
        );
        setStatus("ready");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };
    fetchEvents();
  }, []);

  const shown = useMemo(() => {
    const list = range
      ? events.filter((e) => e.start <= range.end && e.end >= range.start)
      : events.filter((e) => e.end >= new Date());
    return [...list].sort((a, b) => a.start - b.start);
  }, [events, range]);

  const listTitle = range
    ? moment(range.start).isSame(moment(range.end).subtract(1, "ms"), "day")
      ? `${moment(range.start).format("M月D日")}的活动`
      : `${moment(range.start).format("M月D日")} – ${moment(range.end).subtract(1, "ms").format("M月D日")}的活动`
    : "即将举行";

  return (
    <div className="page events_page">
      <PageHeader title="活动预告" en="Events" />

      <section className="page_section">
        <div className="container events_layout">
          <div className="events_list_col">
            <div className="block_head">
              <h2 className="block_title">{listTitle}</h2>
              {range && (
                <button type="button" className="text_link ev_reset" onClick={() => setRange(null)}>
                  显示全部即将举行
                </button>
              )}
            </div>

            {status === "loading" && <p className="ev_empty">正在加载活动…</p>}
            {status === "error" && (
              <div className="ev_empty">
                <p className="ev_empty_title">活动信息暂时无法加载</p>
                <p>请稍后再试，也可以关注 CSSA 公众号获取最新活动消息。</p>
              </div>
            )}
            {status === "ready" && shown.length === 0 && (
              <div className="ev_empty">
                <p className="ev_empty_title">{range ? "这段时间没有活动" : "暂时没有即将举行的活动"}</p>
                <p>新活动发布后会显示在这里，也可以关注 CSSA 公众号获取最新消息。</p>
              </div>
            )}
            {shown.length > 0 && (
              <ul className="ev_list">
                {shown.map((e) => (
                  <EventItem key={e.event_id} event={e} />
                ))}
              </ul>
            )}
          </div>

          <div className="events_calendar">
            <Calendar
              localizer={localizer}
              culture="zh-cn"
              messages={CAL_MESSAGES}
              formats={{ dateFormat: "D", monthHeaderFormat: "YYYY年M月" }}
              events={events}
              startAccessor="start"
              endAccessor="end"
              views={["month", "agenda"]}
              defaultView="month"
              selectable
              popup
              onSelectSlot={({ start, end }) => setRange({ start, end })}
              onSelectEvent={(e) => setRange({ start: moment(e.start).startOf("day").toDate(), end: moment(e.start).endOf("day").toDate() })}
              style={{ height: 560 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
