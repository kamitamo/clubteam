import React from 'react'
import { Link } from "gatsby"

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">

            <section className="split">
                <div className="contact-method">
                    <span className="icon alt fa-link"></span>
                    <ul className="copyright">
                        <li>
                            <a href="http://edogawa-fa.jp/" title="江戸川区サッカー連盟" target="_blank" rel="noopener noreferrer">江戸川区サッカー連盟</a>
                        </li>
                        <li>
                            <a href="http://www.tokyo-2bloc.jp/" title="東京都第2ブロック" target="_blank" rel="noopener noreferrer">東京都第2ブロック</a>
                        </li>
                        <li>
                            <a href="http://www.u12tfa.jp/" title="東京都少年サッカー連盟" target="_blank" rel="noopener noreferrer">東京都少年サッカー連盟</a>
                        </li>
                        <li>
                            <a href="https://jfaid.jfa.jp/uniid-server/login" title="KickOff" target="_blank" rel="noopener noreferrer">KickOff</a>
                        </li>
                        <li>
                            <a href="http://www.forza.tokyo/" title="フォルツァリーグ" target="_blank" rel="noopener noreferrer">フォルツァリーグ</a><br />
                        </li>
                    </ul>
                </div>
            </section>


            <ul className="copyright">
                <li><Link to="/pp" >プライバシー</Link></li>
                <li>&copy; FC Esblanco.</li>
            </ul>
        </div>
    </footer>
)

export default Footer

