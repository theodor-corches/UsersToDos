import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Layout from './Layout';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path=":modules" element={<Layout />} />
          </Route>
          <Route path="/*" element={<div>Page not found</div>} />
        </Routes>
      </Router>
    </div>
  );  
}

export default App;