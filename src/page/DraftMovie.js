import React, { PureComponent } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import YouTube from "react-youtube";
import { Spring } from "react-spring";

import { PageTitle, PageWrapper } from "../unitComponents/styledComponents";
import {
  normalAppearProps,
  titleSpringProps,
} from "../unitComponents/transitions";

const Wrapper = styled(PageWrapper)`
  flex-direction: column;
`;

class DraftMovie extends PureComponent {
  onReady = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  render() {
    return (
      <Wrapper>
        <Spring {...titleSpringProps}>
          {({ transform, opacity }) => (
            <PageTitle style={{ transform, opacity }}>
              <FormattedMessage id="draftMovie.title" />
            </PageTitle>
          )}
        </Spring>
        <Spring {...normalAppearProps}>
          {({ opacity }) => (
            <YouTube
              videoId="3yfzqrikyqs"
              onReady={this.onReady}
              className="youtubePlayer"
              style={{ opacity }}
            />
          )}
        </Spring>
      </Wrapper>
    );
  }
}

export default DraftMovie;
