import { decrypt } from "./encrypt";
import { useState } from "react";
import "./App.css";

const Username = ({ encodeUsername, setEncodeUsername, handleSubmit }) => {
  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      <label style={{ paddingRight: 8 }} htmlFor="input">
        Username:
      </label>
      <input
        name="input"
        style={{ paddingRight: 8 }}
        placeholder="Encrypted username"
        value={encodeUsername}
        onChange={(e) => setEncodeUsername(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

function App() {
  const [encodeUsername, setEncodeUsername] = useState("");
  const [decodeUsername, setDecodeUsername] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const decryptUsername = decrypt(encodeUsername);
    setDecodeUsername(decryptUsername);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Analytics Email Decrypter</h1>
        <div>
          <Username
            encodeUsername={encodeUsername}
            setEncodeUsername={setEncodeUsername}
            handleSubmit={handleSubmit}
          />
          {decodeUsername && (
            <div style={{ marginTop: 24}}>
              <p>Decrypted Username: {decodeUsername}</p>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
