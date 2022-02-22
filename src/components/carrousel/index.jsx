import './style.css';



export default function Carrousel () {

    const scrollSlide1 = (() => document.getElementById('carrousel-item1').scrollIntoView());
    const scrollSlide2 = (() => document.getElementById('carrousel-item2').scrollIntoView());
    const scrollSlide3 = (() => document.getElementById('carrousel-item3').scrollIntoView());
    const scrollSlide4 = (() => document.getElementById('carrousel-item4').scrollIntoView());
    const scrollSlide5 = (() => document.getElementById('carrousel-item5').scrollIntoView());


    return(

        <>

            <div className="carrousel-button-container">

                <div onClick={scrollSlide1} className="carrousel-button"></div>
                <div onClick={scrollSlide2} className="carrousel-button"></div>
                <div onClick={scrollSlide3} className="carrousel-button"></div>
                <div onClick={scrollSlide4} className="carrousel-button"></div>
                <div onClick={scrollSlide5} className="carrousel-button"></div>

            </div>

            <div className="carrousel-container">

                <div className="carrousel-item" id="carrousel-item1">1</div>
                <div className="carrousel-item" id="carrousel-item2">2</div>
                <div className="carrousel-item" id="carrousel-item3">3</div>
                <div className="carrousel-item" id="carrousel-item4">4</div>
                <div className="carrousel-item" id="carrousel-item5">5</div>
        </div>

        </>

    )

}