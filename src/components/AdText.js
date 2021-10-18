import React from "react"

const AdText = ({ adUrl, title, text }) => {

    return (
        <a href={adUrl} target="_blank" rel="noopenner noreferrer">
            {title}<br/>
            {text}-PR
        </a>
    )
}

export default AdText
