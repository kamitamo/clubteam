import React from "react"

const AdIcon = ({ adUrl, adImgUrl, text }) => {

    return (
        <a href={adUrl} target="_blank" rel="noopenner noreferrer">
            <img className="image left" alt={text} src={adImgUrl} />
        </a>
    )
}

export default AdIcon
