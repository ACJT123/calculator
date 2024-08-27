import "./App.css";
import "./styles/basic-calculator.css";
import BasicCalculator from "./views/basic-calculator";

function App() {
  return (
    <main className="flex items-center justify-center h-[100vh]">
      <BasicCalculator />
    </main>
  );
}

export default App;
