import React from "react";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className="flex-center my-4">
      <div
        className="grid
        lg:grid-cols-4 md:grid-cols-3
        grid-cols-2
        sm:gap-6 w-full"
      >
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex-center
            max-sm:my-6 my-4"
          >
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[170px] w-[120px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
