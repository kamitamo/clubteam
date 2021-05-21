import React from 'react'
import { Link } from 'gatsby'

import cp202106 from '../images/202106cp_img.jpg'


const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <Link to="/cp">
                    <img className="image fit" src={cp202106} alt="エスブランコキャンペーン" />
                </Link>
            </section>

            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h5>お問い合わせ先</h5>
                        <a href="mailto:info@fc-esblanco.com?subject=WEBからの問い合わせ" title="メール">
                            info@fc-esblanco.com
                        </a>
                    </div>
                </section>
            </section>                
        </div>
    </section>
)

export default Contact
