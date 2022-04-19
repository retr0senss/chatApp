import { useState, useEffect } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [isJoin, setIsJoin] = useState(false);

  useEffect(() => {
    if (isJoin) {
      socket.emit("join_room", room);
    }
  });

  return (
    <div className="App">
      {!isJoin ? (
        <Login
          setUsername={setUsername}
          setRoom={setRoom}
          setIsJoin={setIsJoin}
          room={room}
          username={username}
        />
      ) : (
        <Chat username={username} room={room} socket={socket} />
      )}
    </div>
  );
}

export default App;
