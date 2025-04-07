import { use, useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*(){}[]";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyTextToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div
        style={{
          backgroundColor: "gray",
          padding: "20px",
          margin: "10px 30px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Password Generator</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <input
            type="text"
            size={60}
            style={{
              backgroundColor: "black",
              border: "solid 5px black",
              padding: "10px",
              borderRadius: "10px",
            }}
            value={password}
            placeholder="password"
            readOnly
            width={60}
          />
          <button
            onClick={copyTextToClipboard}
            
            style={{
              cursor: "pointer",

              padding: "10px",
              borderRadius: "10px",
              marginLeft: "10px",
            }}
          >
            copy
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "25px",
          }}
        >
          <div>
            <input
              type="range"
              defaultValue={length}
              min={6}
              max={50}
              style={{ cursor: "pointer" }}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length: {length}</label>
          </div>

          <div>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              style={{ cursor: "pointer" }}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              style={{ cursor: "pointer" }}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
