import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import { PicProvider } from "./context/PicContext";
import Favorites from "./views/Favorites";
import Home from "./views/Home";


const App = () => {
  return (
    <PicProvider>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
    </PicProvider>
  );
};
export default App;
