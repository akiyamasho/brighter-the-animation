import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import PropTypes from "prop-types";

import { linkColour, mainBgColour, textColour } from "../unitComponents/meta";

const Wrapper = styled.div`
    position: absolute;
    height: 100vh;
    width: ${props => (props.isVisible ? "100vw" : "0")};
    top: 0;
    left: 0;
    z-index: 100;
    background: ${mainBgColour};
    transition: width 0.5s ease-in-out;
`;

const HeaderContainer = styled.div`
    text-align: right;
    padding: 3em;
    opacity: ${props => (props.isVisible ? "1" : "0")};
    transition: opacity 0.3s ease-in;
`;

const CloseButton = styled.div`
    cursor: pointer;
    transition: 0.3s ease-in;
    font-size: 2em;

    &:hover {
        color: ${linkColour};
    }
`;

const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    opacity: ${props => (props.isVisible ? "1" : "0")};
    transition: opacity 0.3s ease-in;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
`;

const ListItem = styled.div`
    cursor: pointer;
    padding: 1em;
    text-transform: uppercase;
    font-size: 2.5em;
    border-bottom: 1px solid ${textColour};
    transition: 0.2s ease-in-out;

    &:hover {
        color: ${linkColour};
        border-bottom: 1px solid ${linkColour};
    }
`;

class MobileMenu extends Component {
    goToPage = pageOffset => {
        const { goToPage, toggleMobileMenuVisibility } = this.props;

        goToPage(pageOffset);
        toggleMobileMenuVisibility();
    };

    render() {
        const { isVisible } = this.props;
        const { toggleMobileMenuVisibility } = this.props;

        return (
            <Wrapper isVisible={isVisible}>
                <HeaderContainer isVisible={isVisible}>
                    <CloseButton onClick={toggleMobileMenuVisibility}>
                        X
                    </CloseButton>
                </HeaderContainer>
                <ListContainer isVisible={isVisible}>
                    <List>
                        <ListItem onClick={() => this.goToPage(0)}>
                            <FormattedMessage id="home" />
                        </ListItem>
                        <ListItem onClick={() => this.goToPage(1)}>
                            <FormattedMessage id="nav.about" />
                        </ListItem>
                        <ListItem onClick={() => this.goToPage(2)}>
                            <FormattedMessage id="nav.characters" />
                        </ListItem>
                        <ListItem onClick={() => this.goToPage(4)}>
                            <FormattedMessage id="nav.draftMovie" />
                        </ListItem>
                        <ListItem onClick={() => this.goToPage(5)}>
                            <FormattedMessage id="nav.process" />
                        </ListItem>
                        <ListItem onClick={() => this.goToPage(6)}>
                            <FormattedMessage id="nav.author" />
                        </ListItem>
                    </List>
                </ListContainer>
            </Wrapper>
        );
    }
}

MobileMenu.propTypes = {
    isVisible: PropTypes.bool,
    goToPage: PropTypes.func.isRequired,
    toggleMobileMenuVisibility: PropTypes.func.isRequired,
};

MobileMenu.defaultProps = {
    isVisible: false,
};

export default MobileMenu;
