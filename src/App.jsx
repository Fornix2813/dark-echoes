import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // 1. Store all episodes in state
  const [episodes] = useState(episodeList);

  // 2. Store the currently selected episode
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div>
      <h1>Dark Echoes</h1>

      <div style={{ display: "flex", gap: "2rem" }}>
        {/* LEFT SIDE: Episode List */}
        <div>
          <h2>Episodes</h2>
          <ul>
            {episodes.map((ep) => (
              <li
                key={ep.id}
                style={{
                  cursor: "pointer",
                  fontWeight: selectedEpisode === ep ? "bold" : "normal"
                }}
                onClick={() => setSelectedEpisode(ep)}
              >
                {ep.title}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE: Details */}
        <div>
          <h2>Episode Details</h2>
          {selectedEpisode ? (
            <div>
              <h3>{selectedEpisode.title}</h3>
              <p><b>Movie ID:</b> {selectedEpisode.id}</p>
              <p><b>Description:</b> {selectedEpisode.description}</p>
              <p>{selectedEpisode.synopsis}</p>
            </div>
          ) : (
            <p>Click an episode to see its details.</p>
          )}
        </div>
      </div>
    </div>
  );
}
