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

        //Default message on page load
        bannerMessage: "Click any driver to start!",
        
        // Pulled from drivers.json
        drivers
    };

    shuffleArray = () => {
        // Grab current state of drivers array
        let driversArray = this.state.drivers;

        //Durstenfeld Shuffle (https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm)
        for (let i = driversArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [driversArray[i], driversArray[j]] = [driversArray[j], driversArray[i]];
        };

        // Set shuffled drivers array as new state
        this.setState({
            drivers: driversArray
        })
    };

    resetDriverClick = () => {
        //grab current state of drivers array
        let driversArray = this.state.drivers;

        //set click = false for each driver
        driversArray.forEach(d => {
            d.clicked = false;
        })

        //set driversArray to be new state
        this.setState({
            drivers: driversArray
        })
    };

    handleOnClick = id => {

        //find referenced driver in drivers array by id
        let driver = this.state.drivers.find(d => {
            return d.id === id;
        });

        //if driver hasn't been clicked, change bannerMessage and increment score
        if (!driver.clicked) {
            driver.clicked = true;
            this.setState({
                score: this.state.score + 1,
                bannerMessage: "Correct!"
            });
            //if driver has been clicked, change bannerMessage and decrement score
        } else {
            this.resetDriverClick();
            this.setState({
                score: 0,
                bannerMessage: "Incorrect!",
            })
        };

        //shuffle array
        this.shuffleArray();
    };

    // shuffle array on page load
    componentDidMount() {
        this.shuffleArray();
    };

    //check to see if score = 20 on component update
    componentDidUpdate() {

        //if score is 20, reset driver click, change jumbotron message, reset score, increment wins
        if (this.state.score === 20) {
            this.resetDriverClick();
            this.setState({
                bannerMessage: "You won!",
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
                bannerMessage={this.state.bannerMessage}
                score={this.state.score} />
                <Jumbotron/>
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