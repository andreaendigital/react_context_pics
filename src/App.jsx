import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";

import Favorites from "./views/Favorites.jsx";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;