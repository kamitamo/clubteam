import React from "react"
import { FaTwitterSquare, FaFacebookSquare, FaLine } from "react-icons/fa"
import ShareIcon from "./ShareIcon"

//import styled from "styled-components"

/*
const ShareArea = styled.div`
  svg {
    width: 30px;
    height: 30px;
    margin-right: var(--spacing);
  }

  a {
    &:after {
      display: none;
    }
  }
`
*/
const ShareCont = ({ facebook, twitter, LINE, href }) => {
    return (

        <div className="ShareArea">
            <h4>この記事をシェアする</h4>
            {twitter && (
                <ShareIcon shareUrl={`https://twitter.com/intent/tweet?url=${href}`}>
                    <FaTwitterSquare />
                </ShareIcon>
            )}
            {facebook && (
                <ShareIcon
                    shareUrl={`https://www.facebook.com/sharer.php?u=${href}%2F`}
                >
                    <FaFacebookSquare />
                </ShareIcon>
            )}
            {LINE && (
                <ShareIcon
                    shareUrl={`https://social-plugins.line.me/lineit/share?url=${href}`}
                >
                    <FaLine />
                </ShareIcon>
            )}
        </div>

    )
}

export default ShareCont
