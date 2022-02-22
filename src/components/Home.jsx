import Carrousel from './carrousel';

import './Home.css';

export function Home () {

    return(
        
        <>

            <div className="home">

                <div className="home-container">

                    <section className="first-section">

                        {/* <div className="first-section-container container split">

                            <div className="first-section-text">
                                Texto
                            </div>

                            <div className="first-section-img">
                                Imagem
                            </div>

                        </div> */}

                    </section>

                    <section className="second-section container">
                        <Carrousel />
                    </section>

                </div>

            </div>
        
        </>

    )

}