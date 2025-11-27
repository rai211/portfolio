import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

export default function ViewCounter() {
  const [views, setViews] = useState(0);

  const GET_URL = "https://api.counterapi.dev/v1/nikitaportfolio/visitors";
  const INCREMENT_URL = "https://api.counterapi.dev/v1/nikitaportfolio/visitors/up";

  useEffect(() => {
    async function updateViews() {
      try {
        // Check if already counted in this session
        const visited = sessionStorage.getItem("visited_portfolio");

        if (!visited) {
          // First visit in this session → increment
          await fetch(INCREMENT_URL);
          sessionStorage.setItem("visited_portfolio", "yes");
        }

        // Fetch current value
        const res = await fetch(GET_URL);
        const data = await res.json();
        setViews(data.count);

      } catch (err) {
        console.error("Error fetching counter:", err);
      }
    }

    updateViews();
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "10px",
        right: "187px",
        padding: "8px 14px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "rgba(255,255,255,0.15)",
        color: "white",
        borderRadius: "8px",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        cursor: "pointer",
        fontSize: "14px",
        zIndex: 9999,
      }}
      title="Number of visitors"
    >
      <FaEye size={0} />
      <span>{views}</span>
    </div>
  );
}
