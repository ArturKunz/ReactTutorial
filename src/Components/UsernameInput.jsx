import { useState } from "react";

function UsernameInput() {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [waitingForTheServer, setWaitingForTheServer] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const userNameEmpty = userName === "";

  function handleChange(e) {
    const newValue = e.target.value;
    setUserName(newValue);
  }

  function handleSubmit() {
    setError("");
    setIsSuccess(false);
    setWaitingForTheServer(true);

    fakeServer(userName, (result) => {
      setWaitingForTheServer(false);
      if (result === "error") {
        setError("Username vergeben");
      } else {
        setIsSuccess(true);
      }
    });
  }

  return (
    <div>
      <div>
        <input type="text" value={userName} onChange={handleChange} />
        <button disabled={userNameEmpty} onClick={handleSubmit}>
          Absenden
        </button>
      </div>
      <label style={{ color: "red" }}>{error}</label>
      {waitingForTheServer && <label>...</label>}
      {isSuccess && <label>Erfolgreich erstellt!</label>}
    </div>
  );
}

function fakeServer(name, callback) {
  setTimeout(() => {
    if (name === "Joe") {
      callback("error");
    } else {
      callback("success");
    }
  }, 500);
}

export default UsernameInput;
