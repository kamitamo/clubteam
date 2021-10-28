import {
  FacebookIcon,
  FacebookShareButton,
  EmailIcon,
  EmailShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
  PinterestIcon,
  PinterestShareButton
} from 'react-share'

import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 24px;
`

const ButtonWrapper = styled.div`
  padding-right: 12px;
`

const ShareButtons = ({title, url}) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <FacebookShareButton url={url} style={{'box-shadow':'none'}}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
      </ButtonWrapper>

      <ButtonWrapper>
        <LineShareButton url={url} style={{'box-shadow':'none'}}>
          <LineIcon size={40} round />
        </LineShareButton>
      </ButtonWrapper>

      <ButtonWrapper>
        <TwitterShareButton title={title} url={url} style={{'box-shadow':'none'}}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>
      </ButtonWrapper>

      <ButtonWrapper>
        <EmailShareButton url={url} style={{'box-shadow':'none'}}>
          <EmailIcon size={40} round />
        </EmailShareButton>
      </ButtonWrapper>

      <ButtonWrapper>
        <PinterestShareButton url={url} style={{'box-shadow':'none'}}>
          <PinterestIcon size={40} round />
        </PinterestShareButton>
      </ButtonWrapper>

    </Wrapper>
  )
}

export default ShareButtons
