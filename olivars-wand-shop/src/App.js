import "./App.css";
import wands from "./wands";
import WandsList from "./Components/WandsList";
import Detail from "./Components/Detail";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/wands/:slug" element={<Detail wands={wands} />} />
        <Route exact path="/" element={<WandsList wands={wands} />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
