import { Routes, Route } from "react-router-dom";
import "./App.css";

import Register from "./Pages/Register";
import Login from "./Pages/Login";

import ProtectedRoute from "./Components/ProtectedRoute";
import NoteForm from "./Pages/NoteForm";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route
          exact
          path="/note"
          element={
            <ProtectedRoute>
              <NoteForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
