import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>FC Esblanco</h1>
            </header>
            <div className="content">
                <p>FC Esblancoは、江戸川区小岩・松本・鹿骨・本一色地区を中心に活動している少年サッカークラブです</p><br/>
                <ul className="actions">
                    <li><a href="/join" className="button">
                            {/* 園児・低学年募集中</a></li> */}
                        無料体験会実施中 11月3日,6日,7日</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
