import React from 'react'
import { Link } from 'gatsby'

import pic06 from '../images/result.jpg'

const ResultHeader = (props) => (

    <section id="banner" style={{backgroundImage: `url(${pic06})`}}>
        <div className="inner">
            <header className="major">
                <h2>Result</h2>
                <p>試合結果</p>
            </header>
            
            <div className="TagArea">
                <ul className="actions horizontal">
                    <li><Link to={`/category/2021年度U-12`} className="button rounded">U-12(6年生)</Link></li>
                    <li><Link to={`/category/2021年度U-11`} className="button rounded">U-11(5年生)</Link></li>
                    <li><Link to={`/category/2021年度U-10`} className="button rounded">U-10(4年生)</Link></li>
                    <li><Link to={`/category/2021年度U-09`} className="button rounded">U-09(3年生)</Link></li>
                    <li><Link to={`/category/2021年度U-08`} className="button rounded">U-08(2年生)</Link></li>
                    <li><Link to={`/category/2021年度U-07`} className="button rounded disabled">U-07(1年生)</Link></li>
                    <li><Link to={`/category/2021年度U-06`} className="button rounded disabled">U-06(キッズ)</Link></li>
                </ul>

            </div>
        </div>
    </section>
)

export default ResultHeader
