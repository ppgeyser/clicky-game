import React, { Component } from "react";
import drivers from "../drivers.json";
import Banner from "./banner/Banner.js";
import Jumbotron from "./jumbotron/Jumbotron.js";
import CardColumns from "./cardColumns/CardColumns.js";
import Cards from "./cards/Cards.js";
import Footer from "./footer/Footer.js";

class GameContainer extends Component {
    state = {
        wins: 0,
        score: 0,
        drivers
    };

    render() {
        return (
            <div>
                <Banner
                wins={this.state.wins}
                score={this.state.score} />
                <Jumbotron />
                <CardColumns>
                    {this.state.drivers.map(driver => (
                        <Cards
                            id={driver.id}
                            key={driver.id}
                            image={driver.image}
                            driverName={driver.driverName}
                        ></Cards>
                    ))}
                </CardColumns>
                <Footer />
            </div>
        )
    };
};

export default GameContainer;