import React, { Component } from "react";
import styled from "styled-components";

import { FormattedMessage } from "react-intl";
import { subContentFont, subTextColour } from "../unitComponents/meta";
import { PageWrapper } from "../unitComponents/styledComponents";

const Wrapper = styled(PageWrapper)`
  text-transform: uppercase;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 20;
  padding: 1em;
  text-align: center;
`;

const FilmTitle = styled.div`
  font-size: 8em;
`;

const MultiSubContainer = styled.div`
  display: flex;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.span`
  font-family: ${subContentFont};
  font-size: 2em;
  padding: 0.25em 0.75em;
`;

const SubDescription = styled.span`
  font-family: ${subContentFont};
  font-size: 1em;
  color: ${subTextColour};
`;

const HelperLabel = styled.div`
  font-size: 0.5em;
  margin-top: 0.25em;
  color: ${subTextColour};
`;

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <FilmTitle>
            <FormattedMessage id="title" />
          </FilmTitle>
          <SubContainer>
            <SubDescription>
              <FormattedMessage id="main.direction" />
            </SubDescription>
            <SubTitle>
              <FormattedMessage id="main.director" />
            </SubTitle>
          </SubContainer>
          <MultiSubContainer>
            <SubContainer>
              <SubDescription>
                <FormattedMessage id="main.music" />
              </SubDescription>
              <SubTitle>
                <FormattedMessage id="main.paramore" />
              </SubTitle>
            </SubContainer>
            <SubContainer>
              <SubDescription>
                <FormattedMessage id="main.lyrics" />
              </SubDescription>
              <SubTitle>
                <FormattedMessage id="main.lyricists" />
              </SubTitle>
            </SubContainer>
          </MultiSubContainer>
          <HelperLabel>
            <FormattedMessage id="main.helper" />
          </HelperLabel>
        </Content>
      </Wrapper>
    );
  }
}

export default Main;
