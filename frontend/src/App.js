import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import Chatpage from "./Pages/Chatpage.js";
import CallComponent from "./components/CallComponent.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/chats" element={<Chatpage />} />
        {/* <Route path="/voice" element={<CallComponent />} /> */}
      </Routes>
    </div>
  );
}

export default App;
