/* eslint-disable react/no-string-refs */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { config } from "react-spring";
import { Parallax, ParallaxLayer } from "react-spring/dist/addons";

import Header from "./page/Header";
import { toggleLocale } from "./localisation/actions";
import Main from "./page/Main";
import About from "./page/About";
import CharactersShe from "./page/CharactersShe";
import CharactersHe from "./page/CharactersHe";
import DraftMovie from "./page/DraftMovie";
import Process from "./page/Process";
import Author from "./page/Author";

import about from "./img/bg/about.jpg";
import charactersShe from "./img/bg/characters_she.jpg";
import charactersHe from "./img/bg/characters_he.jpg";
import draftMovie from "./img/bg/draft_movie.jpg";
import process from "./img/bg/process.jpg";
import author from "./img/bg/author.jpg";
import MobileMenu from "./page/MobileMenu";

const parallaxBackgrounds = [
    about,
    charactersShe,
    charactersHe,
    draftMovie,
    process,
    author,
];

const parallaxPageProps = {
    style: {
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5,
    },
    speed: 0.1,
};

const PAGE_COUNT = 7;

class App extends Component {
    state = {
        currentPageOffset: 0,
        scrollOffset: 0,
        isMobileMenuVisible: false,
    };

    componentDidMount() {
        window.addEventListener("resize", this.handlePageResize());

        const parallaxOnScroll = this.refs.parallax.onScroll;
        this.refs.parallax.onScroll = evt => {
            parallaxOnScroll(evt);

            const { current, space } = this.refs.parallax;
            const { currentPageOffset } = this.state;
            const scrollBasedOffset = Math.round(current / space);

            if (scrollBasedOffset !== currentPageOffset) {
                this.setState({ currentPageOffset: scrollBasedOffset });
            }

            this.setState({
                scrollOffset:
                    Math.abs(current - space * (scrollBasedOffset + 1)) * 0.1,
            });
        };
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handlePageResize);
    }

    handlePageResize = () => {
        const resizeEffect = () => {
            const { currentPageOffset } = this.state;
            this.goToPage(currentPageOffset);
        };
        let timer;
        return event => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(resizeEffect, 300, event);
        };
    };

    goToPage = pageOffset => {
        this.setState({
            currentPageOffset: pageOffset,
        });
        this.refs.parallax.scrollTo(pageOffset);
    };

    toggleMobileMenuVisibility = () => {
        const { isMobileMenuVisible } = this.state;

        this.setState({ isMobileMenuVisible: !isMobileMenuVisible });
    };

    render() {
        const { locale, toggleLocale: toggleLocaleProp } = this.props;
        const {
            currentPageOffset,
            scrollOffset,
            isMobileMenuVisible,
        } = this.state;

        const parallaxPageBackgroundStyle =
            currentPageOffset === 0
                ? {}
                : {
                      backgroundImage: `url(${
                          parallaxBackgrounds[currentPageOffset - 1]
                      })`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundColor: "#000000",
                      backgroundPositionY: `${scrollOffset}px`,
                  };

        return (
            <div>
                <MobileMenu
                    goToPage={this.goToPage}
                    toggleMobileMenuVisibility={this.toggleMobileMenuVisibility}
                    isVisible={isMobileMenuVisible}
                />
                <Header
                    goToPage={this.goToPage}
                    toggleLocale={toggleLocaleProp}
                    currentLocale={locale}
                    currentPageOffset={currentPageOffset}
                    toggleMobileMenuVisibility={this.toggleMobileMenuVisibility}
                />
                <Parallax
                    pages={PAGE_COUNT}
                    ref="parallax"
                    config={config.slow}
                    style={{
                        transition: "background-image 0.2s ease-in-out",
                        ...parallaxPageBackgroundStyle,
                    }}
                >
                    <ParallaxLayer offset={0} {...parallaxPageProps}>
                        <Main />
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} {...parallaxPageProps}>
                        {currentPageOffset === 1 && <About />}
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} {...parallaxPageProps}>
                        {currentPageOffset === 2 && (
                            <CharactersShe
                                shouldPlayVideo={currentPageOffset === 2}
                            />
                        )}
                    </ParallaxLayer>
                    <ParallaxLayer offset={3} {...parallaxPageProps}>
                        {currentPageOffset === 3 && (
                            <CharactersHe
                                shouldPlayVideo={currentPageOffset === 3}
                            />
                        )}
                    </ParallaxLayer>
                    <ParallaxLayer offset={4} {...parallaxPageProps}>
                        <DraftMovie />
                    </ParallaxLayer>
                    <ParallaxLayer offset={5} {...parallaxPageProps}>
                        {currentPageOffset === 5 && <Process />}
                    </ParallaxLayer>
                    <ParallaxLayer offset={6} {...parallaxPageProps}>
                        {currentPageOffset === 6 && <Author />}
                    </ParallaxLayer>
                </Parallax>
            </div>
        );
    }
}

App.propTypes = {
    locale: PropTypes.string.isRequired,
    toggleLocale: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    locale: state.locale,
});

const mapDispatchToProps = dispatch => ({
    toggleLocale: () => dispatch(toggleLocale()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
