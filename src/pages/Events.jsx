import { useState, useEffect } from "react";
import axios from "axios";

function Events() {
  const [search, setSearch] = useState("");
  const [apiEvents, setApiEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const events = [
    {
      id: 1,
      name: "CodeSprint",
      type: "Coding Competition",
      date: "10 January 2026",
      venue: "Computer Lab"
    },
    {
      id: 2,
      name: "RoboWar",
      type: "Robotics Competition",
      date: "11 January 2026",
      venue: "Main Auditorium"
    },
    {
      id: 3,
      name: "Web Design Challenge",
      type: "Web Development",
      date: "12 January 2026",
      venue: "Seminar Hall"
    }
  ];

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => {
        setApiEvents(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load API data.");
        setLoading(false);
      });
  }, []);

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>TechFest 2026 Events</h1>

      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>TechFest Events</h2>

      {filteredEvents.map((event) => (
        <div className="event-card" key={event.id}>
    <h3>{event.name}</h3>
    <p><strong>Type:</strong> {event.type}</p>
    <p><strong>Date:</strong> {event.date}</p>
    <p><strong>Venue:</strong> {event.venue}</p>
    </div>
      ))}

      {filteredEvents.length === 0 && (
        <p>No events found.</p>
      )}

      <h2>API Event Information</h2>

      {loading && <p>Loading API data...</p>}

      {error && <p>{error}</p>}

      {!loading &&
  !error &&
  apiEvents.map((item, index) => (
    <div className="event-card" key={item.id}>
      <h3>
        {["AI Workshop", "Cyber Security Seminar", "Web Development Workshop"][index]}
      </h3>

      <p>
        {[
          "Learn the fundamentals of Artificial Intelligence and explore modern AI technologies.",
          "Learn about cybersecurity threats, data protection, and safe online practices.",
          "Learn modern web development techniques using HTML, CSS, JavaScript, and React."
        ][index]}
      </p>
    </div>
  ))}
    </div>
  );
}

export default Events;