import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<div>AJ Template Home page</div>} />
      <Route path="/about" element={<div>AJ Template About Page</div>} />
    </Routes>
  </Router>
);

export default AppRouter;
