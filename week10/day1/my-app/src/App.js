import "./App.css";
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import AboutContainer from "./components/AboutContainer"

function App() {
    return (
        <div className="App">
            <Nav />
            <AboutContainer />
            <Sidebar />
        </div>
    );
}

export default App;