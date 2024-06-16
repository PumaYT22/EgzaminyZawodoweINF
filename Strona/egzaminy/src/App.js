import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import PageHome from './Pages/PageHome/PageHome';
import NoPage from './Pages/NoPage/NoPage';
import PageContact from './Pages/PageContcat/PageContact';
import PageEgzaminy from './Pages/PageEgzaminy/PageEgzaminy';

function App() {
  return ( 
    <div className="App" >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<PageHome />} />
              <Route path="/contact" element={<PageContact />} />
              <Route path="/egzaminy" element={<PageEgzaminy />} />
              {/* <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} /> */}
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
