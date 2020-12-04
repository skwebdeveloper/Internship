import './App.css';
import Searchbar from "./components/Searchbar"
import Navbar from "./components/Navbar"
import Left from "./components/Left"
import Right from "./components/Right"

// ====================================================================
// I try to explain each code so please go through the comments too
// ====================================================================

// ==================================================================================================
// For now it's not totally responsive but if you give some more time I will definitely make it happen
// ==================================================================================================

function App() {
  return (
    <div className="app">
      <Searchbar />
      <div className="main__body">
      <Navbar />
      <div className="left__and__right">
      <Left />
      <Right />
      </div>
      </div>
    </div>
  );
}

// ==========
// Thanks You
// ==========

export default App;
