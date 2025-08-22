import { useState } from "react";
import NavOne from "./componets/NavOne";
import NavTwo from "./componets/NavTwo";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddStudent from "./comps/Add_Student";
import Dashboard from "./comps/Dashboard";
import ManageStudent from "./comps/Manage_students";
import Reports from "./comps/reports";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <NavOne searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex justify-center items-center">
        <Router>
          <div className="h-full">
            <NavTwo />
          </div>

          <div className="w-full h-180 flex justify-center items-center">
            <Routes>
              <Route
                path="/"
                element={<Dashboard searchQuery={searchQuery} />}
              />
              <Route path="/addstudent" element={<AddStudent />} />
              <Route path="/managestudent" element={<ManageStudent />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

