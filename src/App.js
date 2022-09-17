import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home/home';
import ReplaceBooks from './components/replace-books/replace-books';
import IdentifyArea from './components/identify-area/identify-area';
import CallNumber from './components/call-number/call-number';


function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route className="link" path='/' element={<Home />} />
          <Route className="link" path="Replace_Books" element={<ReplaceBooks />} />
          <Route className="link" path="Identify_Area" element={<IdentifyArea />} />
          <Route className="link" path="Find_Call_Number" element={<CallNumber />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;