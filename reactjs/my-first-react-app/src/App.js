import HomePage from "./components/pages/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";


function App() {

  return (
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default App;