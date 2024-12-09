import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import "./Statistics.css";

const Statistics: React.FC = () => {
  const { t } = useTranslation();
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".statistics");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setStartCount(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="statistics">
      <div className="stat-item">
        <p className="stat-emoji">📄</p>
        {startCount && (
          <CountUp end={95} duration={2.5} suffix="%" className="stat-number" />
        )}
        <p>{t("statistics.satisfiedUsers")}</p>
      </div>
      <div className="stat-item">
        <p className="stat-emoji">😊</p>
        {startCount && (
          <CountUp
            end={20000}
            duration={2.5}
            separator=","
            prefix="~"
            className="stat-number"
          />
        )}
        <p>{t("statistics.generatedTexts")}</p>
      </div>
      <div className="stat-item">
        <p className="stat-emoji">⭐</p>
        {startCount && (
          <CountUp
            end={5.0}
            duration={2.5}
            decimals={1}
            className="stat-number"
          />
        )}
        <p>{t("statistics.averageRating")}</p>
      </div>
    </section>
  );
};

export default Statistics;
