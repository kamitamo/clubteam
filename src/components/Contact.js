import React from 'react'
import { Link } from 'gatsby'

import cp202106 from '../images/202106cp_img.jpg'


const Contact = (props) => (

    <section id="contact">
        <div className="inner">
                <section>
                    <Link to="/cp">[PR]キャンペーン実施中(2021年8月末まで)
                        <img className="image fit" src={cp202106} alt="エスブランコキャンペーン" />
                    </Link>
                </section>

            <section className="split">
                <section>
                    <div className="contact-method">

                        <span className="icon alt fa-envelope"></span>
                        <a href="mailto:info@fc-esblanco.com?subject=WEBからの問い合わせ" title="メール">
                            info@fc-esblanco.com
                        </a>

                    </div>


                    <div className="contact-method">

                        <span className="icon alt fa-twitter"></span>
                        <a href="https://www.twitter.com/fcesblanco" title="twitter">
                            @fcesblanco
                        </a>

                    </div>

                    <div className="contact-method">
                        <span className="icon alt fa-facebook"></span>
                        <a href="https://www.facebook.com/FC-エスブランコ-205464673717617" title="facebook">
                            Facebookアカウント
                        </a>
                        
                    </div>
                    <div className="contact-method">
                        <span className="icon alt fa-rss"></span>
                        <a href="https://www.fc-esblanco.com/rss.xml" title="rss">
                            RSS
                        </a>
                        
                    </div>

                    <div className="contact-method">
                        <span className="icon alt fa-key"></span>
                        <a href="/authorized" title="Member page">
                            関係者用
                        </a>
                        
                    </div>


                </section>
            </section>                
        </div>
    </section>
)


export default Contact

