import "./App.scss";
import { Header } from "./components/shared/header/header";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <main className="main">
        <div className="main__container">
          <Home></Home>
        </div>
      </main>
    </div>
  );
}

export default App;
