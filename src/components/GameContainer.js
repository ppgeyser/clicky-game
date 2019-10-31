import React, { Component } from "react";
import Banner from "./banner/Banner.js";
import Jumbotron from "./jumbotron/Jumbotron.js";
import Cards from "./cards/Cards.js";
import Footer from "./footer/Footer.js";

class GameContainer extends Component {
    state = {};

    render() {
        return (
            <div>
                <Banner />
                <Jumbotron />
                <Cards />
                <Footer />
            </div>
        )
    };
};

export default GameContainer;