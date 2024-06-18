import React from 'react'
import logo from '../../Assets/logo.png'
import { Link } from "react-router-dom";

const PageHome = () => {
  return (
    <div className='d-flex text-center ' style={{minHeight:"100vh"}}>
        <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src={logo} alt="" width="102" height="87" style={{scale:"2"}}/>
                <h1 className="display-5 fw-bold">Egzaminy Zawodowe INF</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Przygotuj się do egzaminów zawodowych z informatyki dzięki naszym zasobom edukacyjnym.
                   Oferujemy przykładowe zadania, szczegółowe rozwiązania oraz materiały pomocnicze, 
                   które pomogą Ci osiągnąć sukces na egzaminie.</p>

                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/egzaminy"><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Egzaminy</button></Link>
                    <Link to="/contact"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Kontakt</button></Link>
                   <button type="button" className="btn btn-info btn-lg px-4 text-light disabled">Materiały</button>
                </div>
                </div>
            </div>
    </div>
  )
}

export default PageHome