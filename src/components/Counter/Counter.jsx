import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { LineChart } from "@mui/x-charts/LineChart";
import styles from "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("counterValue");
    return savedCount !== null ? parseInt(savedCount, 10) : 0;
  });

  const [counterHistory, setCounterHistory] = useState(() => {
    const savedHistory = localStorage.getItem("counterHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  const props = useSpring({ number: count, from: { number: 0 } });

  const getColor = (value) => {
    if (value > 0) {
      return "green";
    } else if (value < 0) {
      return "red";
    } else {
      return "#6200ea";
    }
  };

  useEffect(() => {
    localStorage.setItem("counterValue", count);
    if (count === 0) {
      localStorage.removeItem("counterHistory");
      setCounterHistory([]);
    } else {
      setCounterHistory((currentHistory) => {
        const newHistory = [...currentHistory, count];
        localStorage.setItem("counterHistory", JSON.stringify(newHistory));
        return newHistory;
      });
    }
  }, [count]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.counterArea}>
          <div className={styles.countertext}>
            <animated.div
              className={styles.counterValue}
              style={{ color: getColor(count) }}
            >
              {props.number.to((n) => n.toFixed(0))}
            </animated.div>
          </div>
          <div className={styles.btncontainer}>
            <button
              className={styles.button}
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
            <button className={styles.button} onClick={() => setCount(0)}>
              Reset
            </button>
            <button
              className={styles.button}
              onClick={() => setCount(count - 1)}
            >
              -
            </button>
          </div>
        </div>
        <div className={styles.chartArea}>
          <LineChart
            xAxis={[{ data: counterHistory.map((_, index) => index) }]}
            series={[
              {
                data: counterHistory,
                type: "line",
                showMark: true,
              },
            ]}
            width={500}
            height={300}
          />
        </div>
      </div>
    </>
  );
}

export default Counter;
