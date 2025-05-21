import Calc from "./Components/Calc";
import Result from "./Components/Results";

function App() {

  return (
    <div className="flex bg-white container h-[500px] rounded-3xl">
      <Calc />
      <Result />
    </div>
  );
}

export default App
