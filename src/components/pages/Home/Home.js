import React, { useState, useContext } from "react";
import { MeetupContext } from "../../../context/MeetupContext";
import "./Home.css";

export const Home = () => {
  const { state } = useContext(MeetupContext);
  const [eventTypeFilter, setEventTypeFilter] = useState("Both");

  const formatEventStartTime = (startTime) => {
    const options = {
      weekday: "short",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedDate = new Date(startTime).toLocaleString("en-US", options);
    return formattedDate;
  };

  const handleEventTypeFilterChange = (event) => {
    setEventTypeFilter(event.target.value);
  };

  const filteredMeetupData = state.meetupData.filter((data) => {
    if (eventTypeFilter === "Both") {
      return true;
    } else {
      return data.eventType === eventTypeFilter;
    }
  });

  return (
    <div className="meetup-data-list">
      <div className="meetup-data-list-header">
        <h1>Meetup Events</h1>
        <select
          value={eventTypeFilter}
          onChange={handleEventTypeFilterChange}
          placeholder="Select event type"
        >
          <option value="Both">Both</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>

      <ul className="meetup-data-container">
        {filteredMeetupData.map((data) => (
          <li className="meetup-data" key={data.id}>
            <div className="meetup-image">
              <img src={data.eventThumbnail} alt="" />
            </div>
            <div className="event-type">
              <p>{data.eventType} Event</p>
            </div>
            <p>{formatEventStartTime(data.eventStartTime)}</p>
            <h3>{data.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
