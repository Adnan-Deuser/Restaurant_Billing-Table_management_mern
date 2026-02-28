import React, { useState, useEffect } from "react";

const Greetings = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = (date) => {
    const hour = date.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const formatDate = (date) => {
    const months = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, "0")}, ${date.getFullYear()}`;
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12
    hours = String(hours).padStart(2, "0");

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className="mx-8 mt-6">
      <div className="
          flex justify-between items-center px-6 py-6 
          rounded-2xl backdrop-blur-sm bg-[#0f111a]/50 border border-[#1a1a2a] shadow-lg
          transition-all hover:scale-[1.02] hover:shadow-2xl
        ">

        {/* Left: Greeting */}
        <div>
          <h1 className="
              text-3xl font-bold tracking-tight
              text-emerald-400 drop-shadow-md
            ">
            {getGreeting(dateTime)}, Adnan
          </h1>
          <p className="text-sm text-neutral-400 mt-1 tracking-wide">
            Serve with a smile 😁
          </p>
        </div>

        {/* Right: Clock */}
        <div className="text-right">
          <h1 className="
              text-4xl font-bold tracking-wider 
              text-emerald-400 drop-shadow-lg
            ">
            {formatTime(dateTime)}
          </h1>
          <p className="text-sm text-neutral-500 mt-1">
            {formatDate(dateTime)}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Greetings;