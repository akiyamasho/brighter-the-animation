import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Spring } from "react-spring";

import {
  MobilePageTitle,
  MobileSubPageDescription,
  PageTitle,
  PageWrapper,
} from "../unitComponents/styledComponents";
import shePoster from "../img/temp/she_poster.jpg";
import {
  rightImageSpringProps,
  titleSpringProps,
} from "../unitComponents/transitions";
import { Content, MobileImage, MobileWrapper } from "./About";
import { Default, Mobile } from "../unitComponents/responsive";

const Wrapper = styled(PageWrapper)`
  flex-direction: column;
`;

const CharacterProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: inherit;
`;

const CharacterDetailsContainer = styled.div`
  padding: 0 3em;
`;

const CharacterVideo = styled.img`
  height: auto;
  width: 100%;
`;

const DetailsMultiContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const Title = styled.div`
  text-transform: uppercase;
`;

const Detail = styled.div``;

// Mobile

export const MobileProfilePicture = styled.img`
  height: 25vh;
  width: auto;
`;

export const ProfilePictureMetaContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const MobileDetailsMultiContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// TODO: add video poster
class CharactersShe extends Component {
  render() {
    const { shouldPlayVideo } = this.props;

    const defaultView = (
      <Default>
        <Wrapper>
          <Spring {...titleSpringProps}>
            {({ transform, opacity }) => (
              <PageTitle style={{ transform, opacity }}>
                <FormattedMessage id="characters.title" />
              </PageTitle>
            )}
          </Spring>
          <CharacterProfileContainer>
            <Content>
              <Spring {...titleSpringProps}>
                {({ transform, opacity }) => (
                  <CharacterDetailsContainer style={{ transform, opacity }}>
                    <DetailsMultiContainer>
                      <DetailContainer>
                        <Title>
                          <FormattedMessage id="characters.name" />
                        </Title>
                        <Detail>
                          <FormattedMessage id="characters.herName" />
                        </Detail>
                      </DetailContainer>
                      <DetailContainer>
                        <Title>
                          <FormattedMessage id="characters.age" />
                        </Title>
                        <Detail>
                          21&nbsp;(
                          <FormattedMessage id="characters.startOfFilm" />)
                          <br />
                          24&nbsp;(
                          <FormattedMessage id="characters.endOfFilm" />)
                        </Detail>
                      </DetailContainer>
                    </DetailsMultiContainer>
                    <DetailContainer>
                      <Title>
                        <FormattedMessage id="characters.characterDetails" />
                      </Title>
                      <Detail>
                        <FormattedMessage id="characters.characterDetailsInfoShe" />
                      </Detail>
                    </DetailContainer>
                    <DetailContainer>
                      <Title>
                        <FormattedMessage id="characters.authorsNotes" />
                      </Title>
                      <Detail>
                        <FormattedMessage id="characters.authorsNotesInfoShe1" />
                      </Detail>
                    </DetailContainer>
                  </CharacterDetailsContainer>
                )}
              </Spring>
            </Content>

            <Content>
              <Spring {...rightImageSpringProps}>
                {({ transform, opacity }) => (
                  <CharacterVideo
                    src={shePoster}
                    style={{ transform, opacity }}
                  />
                )}
              </Spring>
            </Content>
          </CharacterProfileContainer>
        </Wrapper>
      </Default>
    );

    const mobileView = (
      <Mobile>
        <MobileWrapper>
          <Spring {...titleSpringProps}>
            {({ transform, opacity }) => (
              <MobilePageTitle style={{ transform, opacity }}>
                <FormattedMessage id="characters.title" />
              </MobilePageTitle>
            )}
          </Spring>
          <CharacterProfileContainer>
            <div>
              <Spring {...titleSpringProps}>
                {({ transform, opacity }) => (
                  <ProfilePictureMetaContainer style={{ transform, opacity }}>
                    <MobileProfilePicture MobileImage src={shePoster} />
                    <MobileDetailsMultiContainer>
                      <DetailContainer>
                        <Title>
                          <FormattedMessage id="characters.name" />
                        </Title>
                        <Detail>
                          <FormattedMessage id="characters.herName" />
                        </Detail>
                      </DetailContainer>
                      <DetailContainer>
                        <Title>
                          <FormattedMessage id="characters.age" />
                        </Title>
                        <Detail>
                          21&nbsp;(
                          <FormattedMessage id="characters.startOfFilm" />)
                          <br />
                          24&nbsp;(
                          <FormattedMessage id="characters.endOfFilm" />)
                        </Detail>
                      </DetailContainer>
                    </MobileDetailsMultiContainer>
                  </ProfilePictureMetaContainer>
                )}
              </Spring>
              <Spring {...titleSpringProps}>
                {({ transform, opacity }) => (
                  <div style={{ transform, opacity }}>
                    <DetailContainer>
                      <Title>
                        <FormattedMessage id="characters.characterDetails" />
                      </Title>
                      <Detail>
                        <FormattedMessage id="characters.characterDetailsInfoShe" />
                      </Detail>
                    </DetailContainer>
                    <DetailContainer>
                      <Title>
                        <FormattedMessage id="characters.authorsNotes" />
                      </Title>
                      <Detail>
                        <FormattedMessage id="characters.authorsNotesInfoShe1" />
                      </Detail>
                    </DetailContainer>
                  </div>
                )}
              </Spring>
            </div>
          </CharacterProfileContainer>
        </MobileWrapper>
      </Mobile>
    );

    return (
      <Fragment>
        {defaultView}
        {mobileView}
      </Fragment>
    );
  }
}

CharactersShe.propTypes = {
  shouldPlayVideo: PropTypes.bool.isRequired,
};

export default CharactersShe;
