import React from "react";

function Login({ setUsername, setRoom, setIsJoin, username, room }) {
  return (
    <section className="loginbox">
      <h1 className="header">Chat App</h1>
      <section className="login-window">
        <label htmlFor="Username">
          <h1>Username</h1>
          <input
            type="text"
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label htmlFor="room">
          <h1>Room</h1>
          <input
            type="text"
            placeholder="Room"
            onChange={(event) => setRoom(event.target.value)}
          />
        </label>
      </section>
      <button
        className="btn btn-danger"
        onClick={() => {
          if (username !== "" && room !== "") {
            setIsJoin(true);
          } else {
            alert("Enter a username or room!!!");
          }
        }}
      >
        Join
      </button>
    </section>
  );
}

export default Login;
