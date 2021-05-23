import React from 'react'
import { Link } from "gatsby"

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">

                <li><a href="https://www.twitter.com/fcesblanco" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/FC-エスブランコ-205464673717617" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>

                <li><a href="mailto:info@fc-esblanco.com?subject=WEBからの問い合わせ2" title="メール" className="icon alt fa-envelope"><span className="label">mail</span></a></li>

            </ul>
            
            <div >
                <ul className="copyright">
                    <li><Link to="/about" >クラブ概要</Link></li>
                    <li><Link to="/pp" >プライバシー</Link></li>
                </ul>
            </div>

            <ul className="copyright">
                <li>&copy; FC Esblanco.</li>
            </ul>
        </div>
    </footer>
)

export default Footer

