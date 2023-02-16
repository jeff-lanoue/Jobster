// import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt="jobster logo" className="logo" />
            </nav>
            <div className="container page">
                {/* info */}
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby umami trust fund plaid selvage deep v food
                        truck echo park, heirloom celiac twee kogi coloring book
                        fam occupy fingerstache. Cold-pressed vice literally
                        occupy pour-over pok pok hot chicken meggings praxis
                        chambray truffaut.
                    </p>
                    <button className="btn btn-hero">login/Register</button>
                </div>
                <img src={main} alt="job hunt" className="img main-img" />
            </div>
        </Wrapper>
    );
};

export default Landing;
