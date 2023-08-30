import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default MainRouter;
