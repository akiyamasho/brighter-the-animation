import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Spring } from "react-spring";

import { PageWrapper } from "../unitComponents/styledComponents";
import hePoster from "../img/temp/he_poster.jpg";
import {
  leftImageSpringProps,
  titleSpringProps,
} from "../unitComponents/transitions";
import { Content, MobileWrapper } from "./About";
import { Default, Mobile } from "../unitComponents/responsive";
import {
  MobileDetailsMultiContainer,
  MobileProfilePicture,
  ProfilePictureMetaContainer,
} from "./CharactersShe";

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

// TODO: add video poster
class CharactersHe extends Component {
  render() {
    const defaultView = (
      <Default>
        <Wrapper>
          <CharacterProfileContainer>
            <Content>
              <Spring {...leftImageSpringProps}>
                {({ transform, opacity }) => (
                  <CharacterVideo
                    src={hePoster}
                    style={{ transform, opacity }}
                  />
                )}
              </Spring>
            </Content>
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
                          <FormattedMessage id="characters.hisName" />
                        </Detail>
                      </DetailContainer>
                      <DetailContainer>
                        <Title>
                          <FormattedMessage id="characters.age" />
                        </Title>
                        <Detail>
                          22&nbsp;(
                          <FormattedMessage id="characters.startOfFilm" />)
                          <br />
                          25&nbsp;(
                          <FormattedMessage id="characters.endOfFilm" />)
                        </Detail>
                      </DetailContainer>
                    </DetailsMultiContainer>
                    <DetailContainer>
                      <Title>
                        <FormattedMessage id="characters.characterDetails" />
                      </Title>
                      <Detail>
                        <FormattedMessage id="characters.characterDetailsInfoHe" />
                      </Detail>
                    </DetailContainer>
                    <DetailContainer>
                      <Title>
                        <FormattedMessage id="characters.authorsNotes" />
                      </Title>
                      <Detail>
                        <FormattedMessage id="characters.authorsNotesInfoHe1" />
                      </Detail>
                    </DetailContainer>
                  </CharacterDetailsContainer>
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
          <CharacterProfileContainer>
            <div>
              <Spring {...titleSpringProps}>
                {({ transform, opacity }) => (
                  <ProfilePictureMetaContainer style={{ transform, opacity }}>
                    <MobileProfilePicture MobileImage src={hePoster} />
                    <MobileDetailsMultiContainer>
                      <DetailContainer>
                        <Title>
                          <FormattedMessage id="characters.name" />
                        </Title>
                        <Detail>
                          <FormattedMessage id="characters.hisName" />
                        </Detail>
                      </DetailContainer>
                      <DetailContainer>
                        <Title>
                          <FormattedMessage id="characters.age" />
                        </Title>
                        <Detail>
                          22&nbsp;(
                          <FormattedMessage id="characters.startOfFilm" />)
                          <br />
                          25&nbsp;(
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
                        <FormattedMessage id="characters.characterDetailsInfoHe" />
                      </Detail>
                    </DetailContainer>
                    <DetailContainer>
                      <Title>
                        <FormattedMessage id="characters.authorsNotes" />
                      </Title>
                      <Detail>
                        <FormattedMessage id="characters.authorsNotesInfoHe1" />
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

export default CharactersHe;
