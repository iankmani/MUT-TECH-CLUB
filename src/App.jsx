import Header from "./Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Leadership from "./pages/Leadership/Leadership";
import Tracks from "./pages/Tracks/Tracks";
import Events from "./pages/Events/Events";
function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Leadership" element={<Leadership />} />
           <Route path="/Tracks" element={<Tracks />} /> 
           <Route path="/Events" element={<Events />} /> 
           
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
