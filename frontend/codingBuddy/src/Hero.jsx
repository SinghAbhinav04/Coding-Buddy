import { Link } from "react-router-dom";
function Hero(){
    return(
        <div>
            <div
            className="hero min-h-screen "
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay"></div>

            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hey Buddy!</h1>
                <p className="mb-5 font-bold">
                   Coding Buddy , your placement promising web companion
                </p>
                <button className="btn"><Link to="/course">Get Started</Link></button>
                </div>
            </div>
            
            </div>
    </div>    
    )
}

export default Hero;