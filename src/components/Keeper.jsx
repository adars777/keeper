import { useState, useEffect } from "react";
import "./Keeper.css";

let nextId = 0;
export default function List() {
  // Step 1: Check for existing data in local storage
  const storedArtists = JSON.parse(localStorage.getItem("artists")) || [];

  const [name, setName] = useState("");
  const [artists, setArtists] = useState(storedArtists);

  // Step 2: Use useEffect to update local storage whenever artists state changes
  useEffect(() => {
    localStorage.setItem("artists", JSON.stringify(artists));
  }, [artists]);

  return (
    <>
      <h1>Keeper </h1>
      <div className="input">
        <input
          value={name}
          placeholder="Enter Text"
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="Add-btn"
          type="Submit"
          onClick={() => {
            if (name !== "") {
              setArtists([...artists, { id: nextId++, name: name }]);
              setName("");
            } else if (name === "") {
              alert("Enter Some text!!");
            }
          }}
        >
          Add
        </button>
      </div>

      <ul>
        {artists.map((artist) => (

          <div className="tags">
          <div className="list">
            <li key={artist.id}>{artist.name} </li>
            </div>


            <button
              className="delete"
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Trash-Can--512.png"
                alt=""
              />
            </button>
            </div>
        ))}
      </ul>
    </>
  );
}
