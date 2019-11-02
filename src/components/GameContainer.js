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
        jumbotronMessage: "Formula 1 Clicky Game",
        drivers
    };

    shuffleArray = () => {
        let driversArray = this.state.drivers;
        for (let i = driversArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [driversArray[i], driversArray[j]] = [driversArray[j], driversArray[i]];
        };
        this.setState({
            drivers: driversArray
        })
    };

    resetDriverClick = () => {
        let driversArray = this.state.drivers;
            driversArray.forEach(d => {
                d.clicked = false;
            })
        this.setState({
            drivers: driversArray
        })
    };

    handleOnClick = id => {
        let driver = this.state.drivers.find(d => {
            return d.id === id;
        });

        if (!driver.clicked) {
            driver.clicked = true;
            this.setState({
                score: this.state.score + 1,
                jumbotronMessage: "Correct!"
            });
        } else {
            this.resetDriverClick();
            this.setState({
                score: 0,
                jumbotronMessage: "Incorrect!",
            })
        };

        this.shuffleArray();
    };

    componentDidMount() {
        this.shuffleArray();
    };

    componentDidUpdate() {
        if (this.state.score === 20) {
            this.resetDriverClick();
            this.setState({
                jumbotronMessage: "You won!",
                wins: this.state.wins + 1,
                score: 0
            })
        }
    };

    render() {
        return (
            <div>
                <Banner
                wins={this.state.wins}
                score={this.state.score} />
                <Jumbotron 
                jumbotronMessage={this.state.jumbotronMessage}
                />
                <CardColumns>
                    {this.state.drivers.map(driver => (
                        <Cards
                            handleOnClick={this.handleOnClick}
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