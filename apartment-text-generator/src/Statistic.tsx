import React from "react";
import CountUp from "react-countup";
import "./Statistics.css";

const Statistics: React.FC = () => {
  return (
    <section className="statistics">
      <div className="stat-item">
        <CountUp end={95} duration={2.5} suffix="%" className="stat-number" />
        <p>Zufriedene Nutzer</p>
      </div>
      <div className="stat-item">
        <CountUp
          end={20000}
          duration={2.5}
          separator=","
          prefix="~"
          className="stat-number"
        />
        <p>Generierte Texte</p>
      </div>
      <div className="stat-item">
        <CountUp
          end={4.8}
          duration={2.5}
          decimals={1}
          className="stat-number"
        />
        <p>Durchschnittliche Bewertung</p>
      </div>
    </section>
  );
};

export default Statistics;
