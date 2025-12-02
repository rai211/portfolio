import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import "./ViewCounter.css";

export default function ViewCounter() {
  const [count, setCount] = useState(0);

  const BACKEND_URL = "https://portfolio-backend-q3m2.onrender.com"; 

 useEffect(() => {
    fetch(`${BACKEND_URL}/api/visitors/track`, {
      method: "POST",
    });

    fetch(`${BACKEND_URL}/api/visitors/count`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.totalVisitors);
      })
      .catch((err) => console.error("Error fetching count:", err));
  }, []);


  return (
    <div className="view-counter">
      <FaEye size={15} />
      <span>{count}</span>
    </div>
  );
}
