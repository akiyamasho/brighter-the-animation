import React, { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Spring } from "react-spring";

import {
  PageTitle,
  PageWrapper,
  SubPageDescription,
} from "../unitComponents/styledComponents";
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

const Gif = styled.img`
  width: 100%;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${linkColour};
  font-weight: 900;
`;

const Process = () => {
  const defaultView = (
    <Default>
      <Wrapper>
        <Content>
          <Spring {...leftImageSpringProps}>
            {({ transform, opacity }) => (
              <Gif src={vid2animeGif} style={{ transform, opacity }} />
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
                <Link
                  href="https://github.com/akiyamasho/brightertheanimation/raw/master/paper/paper.pdf"
                  target="_blank"
                >
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
};

export default Process;
