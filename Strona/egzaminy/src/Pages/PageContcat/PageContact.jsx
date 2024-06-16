import React from 'react'
import './pagecontact.css'
const PageContact = () => {
  return (
    <div className='d-flex text-center ' style={{minHeight:"100vh"}}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{display:"none"}}>
            <symbol id="youtube" viewBox="0 0 16 16">
                <path fill="red" d="M8.051 1.999h-.002c-1.23.004-4.624.046-5.633.309-.65.161-1.19.63-1.343 1.276-.286 1.191-.375 3.725-.375 3.725s.09 2.534.375 3.725c.153.646.692 1.115 1.342 1.276 1.01.263 4.404.305 5.634.309h.002c1.23-.004 4.624-.046 5.633-.309.65-.161 1.19-.63 1.343-1.276.286-1.191.375-3.725.375-3.725s-.09-2.534-.375-3.725c-.153-.646-.692-1.115-1.342-1.276-1.01-.263-4.404-.305-5.634-.309zm-2.534 7.88V6.123l4.69 1.879-4.69 1.877z"/>
            </symbol>
            <symbol id="discord" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.14.25-.297.577-.406.833-1.226-.185-2.426-.185-3.617 0-.11-.25-.268-.583-.406-.833a.051.051 0 0 0-.052-.025c-1.125.194-2.22.545-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037 1.357 1.008 2.67 1.613 3.978 2.007.01.003.021-.002.025-.012a9.85 9.85 0 0 0 .799-1.634.05.05 0 0 0-.025-.066 8.48 8.48 0 0 1-1.248-.595.05.05 0 0 1-.002-.085c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .052.006c.08.067.164.133.248.196a.05.05 0 0 1-.002.084 8.254 8.254 0 0 1-1.249.596.05.05 0 0 0-.024.066c.24.582.508 1.13.798 1.634.004.01.015.015.025.012 1.309-.394 2.621-1 3.979-2.007a.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.105a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Z"/>
            </symbol>
            <symbol id="github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.38c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.88-1.17-.88-1.17-.72-.49.05-.48.05-.48.79.06 1.21.8 1.21.8.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.7 7.7 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </symbol>
            <symbol id="arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h10.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L12.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </symbol>
        </svg>

        

        <div className="container px-4 py-5 my-5" id="featured-3">
                <h2 className="pb-2 border-bottom">Skontaktuj się / Dołącz do nas przez</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                            </svg>
                        </div>
                        <h2>YouTube</h2>
                        <p>Odwiedź nasz kanał na YouTube, aby zobaczyć filmy edukacyjne i tutoriale przygotowujące do egzaminów zawodowych z informatyki i nie tylko.</p>
                        <a href="https://www.youtube.com/@NaukaOdZera" rel="noreferrer" target='_blank' className="icon-link">
                            Zobacz nasz kanał
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#arrow-right" />
                            </svg>
                        </a>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#discord" />
                            </svg>
                        </div>
                        <h2>Discord</h2>
                        <p>Dołącz do naszego serwera Discord, aby uzyskać wsparcie, wymieniać się wiedzą i uczestniczyć w dyskusjach z innymi uczniami i nauczycielami.</p>
                        <a href="https://www.discord.com" rel="noreferrer" target='_blank' className="icon-link">
                            Dołącz do nas
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#arrow-right" />
                            </svg>
                        </a>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon bg-primary bg-gradient">
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#github" />
                            </svg>
                        </div>
                        <h2>GitHub</h2>
                        <p>Sprawdź nasze repozytoria na GitHub, aby uzyskać dostęp do materiałów edukacyjnych, projektów i kodu źródłowego.</p>
                        <a href="https://github.com/PumaYT22/EgzaminyZawodoweINF" rel="noreferrer" target='_blank' className="icon-link">
                            Zobacz repozytoria
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#arrow-right" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default PageContact