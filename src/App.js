import SideBar from "./components/side-bar/SideBar";
import "./App.css";
import Header from "./components/header/Header";
import Analytics from "./pages/analytics/Analytics";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <Analytics />
    </div>
  );
}

export default App;
