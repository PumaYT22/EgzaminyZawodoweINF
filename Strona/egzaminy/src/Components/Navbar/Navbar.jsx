import React from 'react'
import logo from '../../Assets/logo.png'
import { Outlet, Link } from "react-router-dom";



const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top  mb-5" style={{backgroundColor:"#111111"}}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="navbar-brand mt-1">
                        <img src={logo} alt="Logo" width="50" height="44" className="d-inline-block align-text-center"/>
                        EgzaminyZawodoweINF
                    </Link>
                
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Strona Główna
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/egzaminy">Egzaminy</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/materialy">Materiały</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Kontakt</Link>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href="https://github.com/PumaYT22/EgzaminyZawodoweINF" rel="noreferrer" target='_blank'>
                            <svg  className="bi" width="1em" height="1em" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.38c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.88-1.17-.88-1.17-.72-.49.05-.48.05-.48.79.06 1.21.8 1.21.8.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.7 7.7 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg></a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Szukaj" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Wyszukaj</button>
                    </form>
                    </div>
                </div>
                
        </nav>

        <main className="flex-shrink-0">
            
            <Outlet />
            

        </main>
    

    {/* <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
            <span className="text-muted">Aplikacja zrobiona przez NaukaOdZera ©️ 2024</span>
        </div>
    </footer> */}
    </>
  )
}

export default Navbar