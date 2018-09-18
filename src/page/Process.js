import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Spring } from "react-spring";

import {
  PageTitle,
  PageWrapper,
  SubPageDescription,
} from "../unitComponents/styledComponents";
import vid2animeMp4 from "../img/video_to_anime.mp4";
import vid2animeWebm from "../img/video_to_anime.webm";
import vid2animeGif from "../img/video_to_anime.gif";
import {
  contentSpringProps,
  leftImageSpringProps,
  titleSpringProps,
} from "../unitComponents/transitions";
import { linkColour } from "../unitComponents/meta";
import paperPdf from "../doc/paper.pdf";
import { Default, Mobile } from "../unitComponents/responsive";
import { MobileWrapper } from "./About";

const Wrapper = styled(PageWrapper)`
  justify-content: space-around;
`;

const Content = styled.div`
  max-width: 50%;
`;

const Video = styled.video`
  width: 100%;
`;

const Gif = styled.img`
  width: 100%;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${linkColour};
  font-weight: 900;
`;

class Process extends Component {
  render() {
    const defaultView = (
      <Default>
        <Wrapper>
          <Content>
            <Spring {...leftImageSpringProps}>
              {({ transform, opacity }) => (
                <Video
                  autoPlay
                  playsinline
                  muted
                  loop
                  style={{ transform, opacity }}
                  controls
                >
                  <source src={vid2animeMp4} type="video/mp4" />
                  <source src={vid2animeWebm} type="video/webm" />
                  <Gif src={vid2animeGif} />
                </Video>
              )}
            </Spring>
          </Content>
          <Content>
            <Spring {...titleSpringProps}>
              {({ transform, opacity }) => (
                <PageTitle style={{ transform, opacity }}>
                  <FormattedMessage id="process.title" />
                </PageTitle>
              )}
            </Spring>
            <Spring {...contentSpringProps}>
              {({ transform, opacity }) => (
                <SubPageDescription style={{ transform, opacity }}>
                  <FormattedMessage id="process.details" />
                  <br />
                  <br />
                  <Link href={paperPdf} target="_blank">
                    <FormattedMessage id="process.viewResearchPaper" />
                  </Link>
                </SubPageDescription>
              )}
            </Spring>
          </Content>
        </Wrapper>
      </Default>
    );

    const mobileView = (
      <Mobile>
        <MobileWrapper>
          <Spring {...titleSpringProps}>
            {({ transform, opacity }) => (
              <PageTitle style={{ transform, opacity }}>
                <FormattedMessage id="process.title" />
              </PageTitle>
            )}
          </Spring>
          <Spring {...titleSpringProps}>
            {({ transform, opacity }) => (
              <Gif src={vid2animeGif} style={{ transform, opacity }} />
            )}
          </Spring>
          <Spring {...contentSpringProps}>
            {({ transform, opacity }) => (
              <SubPageDescription style={{ transform, opacity }}>
                <FormattedMessage id="process.details" />
                <br />
                <br />
                <Link href={paperPdf} target="_blank">
                  <FormattedMessage id="process.viewResearchPaper" />
                </Link>
              </SubPageDescription>
            )}
          </Spring>
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

export default Process;
