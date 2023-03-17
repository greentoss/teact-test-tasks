import React from 'react';
import styled from "styled-components";
import HeadingOne from "../../atoms/headings/headingOne/headingOne";
import HeadingThree from "../../atoms/headings/headingThree/headingThree";


const StyledBannerHeading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -54%);
  z-index: 5;
`

const BannerHeading = () =>  {

    return (
        <StyledBannerHeading>
            <HeadingThree text={'the space is waiting for'}/>
            <HeadingOne text={'you'}/>

        </StyledBannerHeading>
    );
}

export default BannerHeading;
