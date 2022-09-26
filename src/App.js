
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WholeApp from './pages/WholeApp';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WholeApp />} />
        <Route exact path="*" element={<WholeApp />} />

        </Routes>
        </Router>
  );
}

export default App;
