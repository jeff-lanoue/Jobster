// import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
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

                    <Link to="/register" className="btn btn-hero">
                        Login / Register
                    </Link>
                </div>
                <img src={main} alt="job hunt" className="img main-img" />
            </div>
        </Wrapper>
    );
};

export default Landing;
