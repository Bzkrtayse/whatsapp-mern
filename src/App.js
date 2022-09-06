import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="flex flex-wrap">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
