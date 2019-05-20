import React, { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Spring } from "react-spring";

import {
    PageTitle,
    PageWrapper,
    SubPageDescription,
} from "../unitComponents/styledComponents";
import {
    contentSpringProps,
    titleSpringProps,
} from "../unitComponents/transitions";
import { Default, Mobile } from "../unitComponents/responsive";
import { MobileWrapper } from "./About";

const Wrapper = styled(PageWrapper)`
    flex-direction: column;
    width: 50%;
`;

const Author = () => {
    const content = (
        <Fragment>
            <Spring {...titleSpringProps}>
                {({ transform, opacity }) => (
                    <PageTitle style={{ transform, opacity }}>
                        <FormattedMessage id="author.title" />
                    </PageTitle>
                )}
            </Spring>
            <Spring {...contentSpringProps}>
                {({ transform, opacity }) => (
                    <SubPageDescription
                        style={{ transform, opacity, width: "100%" }}
                    >
                        <FormattedMessage id="author.description" />
                    </SubPageDescription>
                )}
            </Spring>
        </Fragment>
    );
    const defaultView = (
        <Default>
            <Wrapper>{content}</Wrapper>
        </Default>
    );
    const mobileView = (
        <Mobile>
            <MobileWrapper>{content}</MobileWrapper>
        </Mobile>
    );

    return (
        <Fragment>
            {defaultView}
            {mobileView}
        </Fragment>
    );
};

export default Author;
