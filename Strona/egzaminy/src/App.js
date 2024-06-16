import './App.css';

import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import PageHome from './Pages/PageHome/PageHome';
import NoPage from './Pages/NoPage/NoPage';
import PageContact from './Pages/PageContcat/PageContact';
import PageEgzaminy from './Pages/PageEgzaminy/PageEgzaminy';
import INFtrojka from './Pages/PageEgzaminy/MiniPagesEgzamin/INF03/INFtrojka';

function App() {
  return ( 
    <div className="App" >
        <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="/egzaminy" element={<PageEgzaminy />} />
          <Route path="/EgzaminyZawodoweINF/#/egzaminy/inf03" element={<INFtrojka />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
