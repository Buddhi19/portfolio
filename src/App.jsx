import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CoursesPage from './pages/CoursesPage.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academic-record" element={<CoursesPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </>
  );
}

export default App;
