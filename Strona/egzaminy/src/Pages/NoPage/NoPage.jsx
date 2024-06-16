import React from 'react'
import { Link } from "react-router-dom";


const NoPage = () => {
  return (
    <div class="d-flex align-items-center justify-content-center bg-body" style={{height:"75vh"}}>
        <div class="text-center">
            <h1 class="display-1 fw-bold">404</h1>
            <p class="fs-3"> <span class="text-danger">Opps!</span> Nie znaleziono strony.</p>
            <p class="lead">
                Ta Strona, której szukasz nie istnieje... albo jest w trakcie remontu :D
            </p>
            <Link to="/" class="btn btn-primary">Wróć na Stronę Główną</Link>
        </div>
    </div>
  )
}

export default NoPage