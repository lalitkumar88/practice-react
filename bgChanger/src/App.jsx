import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        backgroundColor: color,
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexWrap: "wrap",
          inset: "90% 0 0 0",
          justifyContent: "center",
          backgroundColor: "#666",
          borderRadius: "20px",
          padding: "10px 10px",
          margin: "10px 10px",
        }}
      >
        <button
          onClick={() => {
            setColor("red");
          }}
          style={{ backgroundColor: "red", borderColor: "black" }}
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
          style={{ backgroundColor: "blue", borderColor: "black" }}
        >
          Blue
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
          style={{ backgroundColor: "green", borderColor: "black" }}
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("olive");
          }}
          style={{ backgroundColor: "olive", borderColor: "black" }}
        >
          Olive
        </button>
        <button
          onClick={() => {
            setColor("black");
          }}
          style={{ backgroundColor: "black", borderColor: "black" }}
        >
          Black
        </button>
        <button
          onClick={() => {
            setColor("white");
          }}
          style={{
            backgroundColor: "white",
            color: "black",
            borderColor: "black",
          }}
        >
          White
        </button>
        <button
          onClick={() => {
            setColor("gray");
          }}
          style={{ backgroundColor: "gray", borderColor: "black" }}
        >
          Gray
        </button>
      </div>
    </div>
  );
}

export default App;
