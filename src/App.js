import "./App.css";
import Create from "./components/create/create";
import Read from "./components/read/read";

import Update from "./components/update/update";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div>
          <h2 className="mainT">User Data</h2>
        </div>
        <div>
          <Routes>
            <Route exact path="/create" element={<Create />} />
          </Routes>
        </div>

        <div>
          <Routes>
            <Route exact path="/read" element={<Read />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
