import React from 'react'

//import cp202106 from '../images/202106cp_img.jpg'


const Contact = (props) => (
    
    <section id="contact">
        <div className="inner">
            
            <section >
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-brands fa-instagram"></span>
                        <a href="https://instagram.com/fc_esblanco?r=nametag" title="Instagram">@fc_esblanco</a>
                    </div>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <a href="mailto:info@fc-esblanco.com?subject=WEBからの問い合わせ" title="メール">info@fc-esblanco.com</a>
                    </div>

                    <div className="contact-method">
                        <span className="icon alt fa-twitter"></span>
                        <a href="https://www.twitter.com/fcesblanco" title="twitter">@fcesblanco</a>
                    </div>

                    <div className="contact-method">
                        <span className="icon alt fa-facebook"></span>
                        <a href="https://www.facebook.com/FC-エスブランコ-205464673717617" title="facebook">Facebookアカウント</a>
                    </div>

                    <div className="contact-method">
                        <span className="icon alt fa-rss"></span>
                        <a href="https://www.fc-esblanco.com/rss.xml" title="rss">RSS</a>
                    </div>

                    <div className="contact-method">
                        <span className="icon alt fa-key"></span>
                        <a href="/authorized" title="Member page">関係者用ページ</a>
                        
                    </div>
                </section>                
            </section>


            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-link"></span>
                        <h3>リンク</h3>
                        <ul style={{'listStyleType':'none'}} className="actions">
                            <li><a href="http://edogawa-fa.jp/" title="江戸川区サッカー連盟" target="_blank" rel="noopener noreferrer">江戸川区サッカー連盟</a></li><br/>
                            <li><a href="http://www.tokyo-2bloc.jp/" title="東京都第2ブロック" target="_blank" rel="noopener noreferrer">東京都第2ブロック</a></li><br/>
                            <li><a href="http://www.u12tfa.jp/" title="東京都少年サッカー連盟" target="_blank" rel="noopener noreferrer">東京都少年サッカー連盟</a></li><br/>
                            <li><a href="https://jfaid.jfa.jp/uniid-server/login" title="KickOff" target="_blank" rel="noopener noreferrer">JFA KickOff</a></li><br/>
                            <li><a href="http://www.forza.tokyo/" title="フォルツァリーグ" target="_blank" rel="noopener noreferrer">フォルツァリーグ</a><br /></li><br/>
                            <li><a href="https://tobu-league.mystrikingly.com/" title="東部リーグ" target="_blank" rel="noopener noreferrer">東部リーグ</a><br /></li><br/>
                        </ul>
                    </div>
                </section>
            </section>
        </div>
    </section>
)


export default Contact
