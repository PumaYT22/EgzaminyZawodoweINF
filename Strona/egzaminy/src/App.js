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
          <Routes>
            <Route path="https://PumaYT22.github.io/EgzaminyZawodoweINF" element={<Navbar />}>
              <Route index element={<PageHome />} />
              <Route path="https://PumaYT22.github.io/EgzaminyZawodoweINF/contact" element={<PageContact />} />
              <Route path="https://PumaYT22.github.io/EgzaminyZawodoweINF/egzaminy" element={<PageEgzaminy />} />
                  <Route path="https://PumaYT22.github.io/EgzaminyZawodoweINF/egzaminy/inf03" element={<INFtrojka />} />
              
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
