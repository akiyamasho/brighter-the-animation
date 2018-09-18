import React, { PureComponent } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import PropTypes from "prop-types";
import Responsive from "react-responsive";

import overlayTile from "../img/overlay_tile.png";

import { textColour } from "../unitComponents/meta";
import { LOCALE_EN, LOCALE_JA } from "../localisation";
import { Default, Mobile } from "../unitComponents/responsive";

const PAGE_ID_ABOUT = "nav.about";
const PAGE_ID_CHARACTERS = "nav.characters";
const PAGE_ID_DRAFT_MOVIE = "nav.draftMovie";
const PAGE_ID_PROCESS = "nav.process";
const PAGE_ID_AUTHOR = "nav.author";

export const PAGE_ID_OFFSET_RANGE_LIST = {
  [PAGE_ID_ABOUT]: {
    min: 1,
    max: 1,
  },
  [PAGE_ID_CHARACTERS]: {
    min: 2,
    max: 3,
  },
  [PAGE_ID_DRAFT_MOVIE]: {
    min: 4,
    max: 4,
  },
  [PAGE_ID_PROCESS]: {
    min: 5,
    max: 5,
  },
  [PAGE_ID_AUTHOR]: {
    min: 6,
    max: 6,
  },
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
`;

const FilmTitleIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  padding: 0.5em 2em;
  cursor: pointer;]
`;

const MainFilmTitle = styled.div`
  font-size: 1.25em;
`;

const SubFilmTitle = styled.div`
  font-size: 0.5em;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
  padding: 1em 3em;
`;

const NavigationItem = styled.div`
  transition: border-bottom 1s ease-in-out;
  padding: 1em;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const LanguageToggle = styled(NavigationItem)`
  font-size: 0.75em;
`;

const NavigationItemBorder = styled.div`
  height: 1px;
  width: ${props => (props.selected ? "100%" : "0")};
  transition: width 0.1s ease-in;
  background: ${textColour};
`;

const MobileMenuBtn = styled.div`
  cursor: pointer;
  font-size: 3em;
`;

class Header extends PureComponent {
  render() {
    const {
      goToPage,
      currentPageOffset,
      currentLocale,
      toggleLocale,
      toggleMobileMenuVisibility,
    } = this.props;

    return (
      <Wrapper>
        <NavigationContainer>
          <FilmTitleIconContainer onClick={() => goToPage(0)}>
            <MainFilmTitle>
              <FormattedMessage id="title" />
            </MainFilmTitle>
            <SubFilmTitle>
              <FormattedMessage id="subtitle" />
            </SubFilmTitle>
          </FilmTitleIconContainer>
          {/*(<LanguageToggle onClick={toggleLocale}>
            <FormattedMessage
              id={currentLocale === LOCALE_JA ? LOCALE_EN : LOCALE_JA}
            />
          </LanguageToggle>)*/}
        </NavigationContainer>
        <Default>
          <NavigationContainer>
            {Object.keys(PAGE_ID_OFFSET_RANGE_LIST).map(pageId => {
              const currentPage = PAGE_ID_OFFSET_RANGE_LIST[pageId];

              return (
                <NavigationItem
                  key={pageId}
                  onClick={() => goToPage(currentPage.min)}
                >
                  <FormattedMessage id={pageId} />
                  <NavigationItemBorder
                    selected={
                      currentPage.min === currentPageOffset ||
                      currentPage.max === currentPageOffset
                    }
                  />
                </NavigationItem>
              );
            })}
          </NavigationContainer>
        </Default>
        <Mobile>
          <NavigationContainer>
            <MobileMenuBtn onClick={toggleMobileMenuVisibility}>
              ミ
            </MobileMenuBtn>
          </NavigationContainer>
        </Mobile>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  goToPage: PropTypes.func.isRequired,
  currentPageOffset: PropTypes.number,
  toggleLocale: PropTypes.func.isRequired,
  currentLocale: PropTypes.string.isRequired,
  toggleMobileMenuVisibility: PropTypes.func.isRequired,
};

Header.defaultProps = {
  currentPageOffset: 0,
};

export default Header;
