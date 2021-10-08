import React from 'react'
import { Link } from "gatsby"
//import Iframe from 'react-iframe'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">

            <ul className="copyright">
                <li>&copy; FC Esblanco.</li>
                <li><Link to="/pp" ><u>プライバシーポリシー</u></Link></li>
            </ul>
        </div>
    </footer>
)

export default Footer

