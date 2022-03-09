import './Home.css';

import kokushibo_1 from '../assets/kokushibo_1.jpg';
import kokushibo_2 from '../assets/kokushibo_2.jpg';
import kokushibo_3 from '../assets/kokushibo_3.jpg';
import kokushibo_4 from '../assets/kokushibo_4.png';

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

                        <div className="second-section-titles text-center">
                            <p className="second-section-subtitle subtitle">O mais forte de todos</p>
                            <h2 className="section-section-title title">Lua superior</h2>
                        </div>

                        <div className="item-container">
                        
                            <div className="item-item">
                                <div className="item-img-container">
                                    
                                    <div className="item-img-container">
                                        <img className='item-img' src={kokushibo_1} />
                                    </div>

                                    <div className="item-text">
                                    
                                        <p className="item-name">Kokushibo</p>
                                        <p className="item-description">Lua Superior Um</p>

                                    </div>

                                </div>    
                            </div>    
                            <div className="item-item">
                                <div className="item-img-container">
                                    
                                    <div className="item-img-container">
                                        <img className='item-img' src={kokushibo_2} />
                                    </div>

                                    <div className="item-text">
                                    
                                        <p className="item-name">Kokushibo</p>
                                        <p className="item-description">Lua Superior Um</p>

                                    </div>

                                </div>    
                            </div>   <div className="item-item">
                                <div className="item-img-container">
                                    
                                    <div className="item-img-container">
                                        <img className='item-img' src={kokushibo_3} />
                                    </div>

                                    <div className="item-text">
                                    
                                        <p className="item-name">Kokushibo</p>
                                        <p className="item-description">Lua Superior Um</p>

                                    </div>

                                </div>    
                            </div>   <div className="item-item">
                                <div className="item-img-container">
                                    
                                    <div className="item-img-container">
                                        <img className='item-img' src={kokushibo_4} />
                                    </div>

                                    <div className="item-text">
                                    
                                        <p className="item-name">Kokushibo</p>
                                        <p className="item-description">Lua Superior Um</p>

                                    </div>

                                </div>    
                            </div>     
                            
                        </div>
                    </section>

                    <section className="muzan">

                        <div className="muzan-container container">

                            <div className="muzan-content split">

                                <div className="muzan-img-container">
                                    <img src={kokushibo_1} alt="" className="muzan-img" />    
                                </div>

                                <div className="muzan-text">
                                    
                                    <div className="muzan-titles">
                                        <h3 className="muzan-subtitle">O criador dos Onis</h3>
                                        <h2 className="muzan-title">Muzan</h2>
                                    </div>

                                    <p className="muzan-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur nihil dolorem incidunt laborum sint reiciendis dicta, perferendis cupiditate assumenda!</p>
                                     
                                    <p className="muzan-description">Laborum tempora nam temporibus placeat voluptas numquam nobis adipisci error iure, eveniet labore modi assumenda quas incidunt repellat. Aut, autem.</p>

                                </div>
                                
                            </div>    
                        
                        </div>    
                        
                    </section>

                </div>

            </div>
        
        </>

    )

}