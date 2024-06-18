import React from 'react'
import egz1 from '../../Assets/egz1.jpg'
import egz2 from '../../Assets/egz2.jpg'

const PageEgzaminy = () => {
  return (
    <div className='d-flex justify-content-center text-center' style={{ minHeight: "100vh" }}>
            <div className="container d-flex justify-content-center align-items-center px-4 py-5  h-100">
                <div className="row w-100">
                    <div className="col-sm-6 mb-4">
                        <div className="card h-100">
                            <img className="card-img-top " src={egz1} style={{ maxHeight: "250px", objectFit: "cover" }}  alt="Egzamin INF03" />
                            <div className="card-body">
                                <h5 className="card-title">Egzamin E14/EE09/INF03</h5>
                                <p className="card-text">Sprawdź rozwiązania do egzaminu INF03, który obejmuje projektowanie stron,obróbka grafiki lub dźwieku oraz tworzenie i zarządzanie bazami danych.
                                    Na tym egzaminie głównie posługujesz się sql,html,css,php.
                                </p>
                                <a href="/EgzaminyZawodoweINF/#/egzaminy/inf03" className="btn btn-primary">Sprawdź Rozwiązania arkuszy</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-4">
                        <div className="card h-100">
                            <img className="card-img-top" src={egz2} alt="Egzamin INF04" style={{ maxHeight: "250px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">Egzamin INF04</h5>
                                <p className="card-text">Sprawdź rozwiązania do egzaminu INF04, koncentrującego się na programowaniu aplikacji i zarządzaniu systemami operacyjnymi.
                                    Na tym arkuszu tworzysz głównie aplikacje w React,Android Studio,WPF,Express oraz konsolowe.
                                </p>
                                <a href="#brak" className="btn btn-primary disabled">Sprawdź Rozwiązania arkuszy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default PageEgzaminy