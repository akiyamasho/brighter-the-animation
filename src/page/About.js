import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Spring } from "react-spring";

import about from "../img/about.png";

import {
  MobilePageTitle,
  MobileSubPageDescription,
  PageTitle,
  PageWrapper,
  SubPageDescription,
} from "../unitComponents/styledComponents";
import {
  contentSpringProps,
  rightImageSpringProps,
  titleSpringProps,
} from "../unitComponents/transitions";
import { Default, Mobile } from "../unitComponents/responsive";

const Wrapper = styled(PageWrapper)`
  justify-content: space-around;
`;

export const Content = styled.div`
  width: 50%;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
`;

// Mobile

export const MobileWrapper = styled(PageWrapper)`
  width: 90vw;
  justify-content: space-around;
  flex-direction: column;
`;

export const MobileImage = styled.img`
  width: 70%;
`;

class About extends Component {
  render() {
    return (
      <Fragment>
        <Default>
          <Wrapper>
            <Content>
              <Spring {...titleSpringProps}>
                {({ transform, opacity }) => (
                  <PageTitle style={{ transform, opacity }}>
                    <FormattedMessage id="about.title" />
                  </PageTitle>
                )}
              </Spring>
              <Spring {...contentSpringProps}>
                {({ transform, opacity }) => (
                  <SubPageDescription style={{ transform, opacity }}>
                    <FormattedMessage id="about.filmIntroduction" />
                  </SubPageDescription>
                )}
              </Spring>
            </Content>
            <Content>
              <Spring {...rightImageSpringProps}>
                {({ transform, opacity }) => (
                  <ImageContainer style={{ transform, opacity }}>
                    <Image src={about} />
                  </ImageContainer>
                )}
              </Spring>
            </Content>
          </Wrapper>
        </Default>

        <Mobile>
          <MobileWrapper>
            <Spring {...titleSpringProps}>
              {({ transform, opacity }) => (
                <MobilePageTitle style={{ transform, opacity }}>
                  <FormattedMessage id="about.title" />
                </MobilePageTitle>
              )}
            </Spring>
            <Spring {...titleSpringProps}>
              {({ transform, opacity }) => (
                <ImageContainer style={{ transform, opacity }}>
                  <MobileImage src={about} />
                </ImageContainer>
              )}
            </Spring>
            <Spring {...contentSpringProps}>
              {({ transform, opacity }) => (
                <MobileSubPageDescription style={{ transform, opacity }}>
                  <FormattedMessage id="about.filmIntroduction" />
                </MobileSubPageDescription>
              )}
            </Spring>
          </MobileWrapper>
        </Mobile>
      </Fragment>
    );
  }
}

export default About;
