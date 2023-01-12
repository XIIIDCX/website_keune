import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="flex-col">
      <Navbar />
      <Slider />
      <Main />
    </div>
  );
}

export default App;
