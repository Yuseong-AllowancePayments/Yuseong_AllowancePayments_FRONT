import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'renderer/pages/Home';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
