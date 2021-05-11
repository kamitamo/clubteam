import React from "react"

const ShareIcon = ({ shareUrl, children }) => {
  return (
    <a href={shareUrl} target="_blank" rel="noopenner noreferrer">
      {children}
    </a>
  )
}

export default ShareIcon
