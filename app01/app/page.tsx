import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { title } from "process";
import React from "react";

import events from "@/lib/constants";

const page = () => {
  return (
    <section>
      <h1 className="text-center">
        The hub for every Dev <br></br> Event You cant Miss
      </h1>
      <p className="text-center mt-5">Hackathons, Meetups, and Conferences</p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Feautured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title} className="list-none">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
