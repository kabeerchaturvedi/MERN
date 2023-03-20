import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/landingpage/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ minHeight: "93vh" }}></main>
      <LandingPage/>
      <Footer />
    </div>
  );
}

export default App;
