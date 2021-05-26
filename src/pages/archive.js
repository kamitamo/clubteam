import React from 'react'
import { Link } from 'gatsby'
import Seo from "../components/SEO"
import Layout from '../components/Layout'

import pic07 from '../images/archive.jpg'

const ArchivePage = ({ data }) => {

    return (
        <Layout>
            <Seo title="アーカイブ" />

            <div id="main">
                <section id="banner" style={{backgroundImage: `url(${pic07})`}}>
                    <div className="inner">
                        <header className="major">
                            <h2>Archive</h2>
                            <p>2020年度</p>
                        </header>

                        <ul className="actions">
                            <li><Link to={`/category/2020年度U-12`} className="button small rounded">U-12(6年生)</Link></li>
                            <li><Link to={`/category/2020年度U-11`} className="button small rounded">U-11(5年生)</Link></li>
                            <li><Link to={`/category/2020年度U-10`} className="button small rounded">U-10(4年生)</Link></li>
                            <li><Link to={`/category/2020年度U-09`} className="button small rounded">U-09(3年生)</Link></li>
                            <li><Link to={`/category/2020年度U-08`} className="button small rounded">U-08(2年生)</Link></li>
                            <li><Link to={`/category/2020年度U-07`} className="button small rounded">U-07(1年生)</Link></li>
                            <li><Link to={`/category/2020年度U-06`} className="button small rounded">U-06(キッズ)</Link></li>
                        </ul>
                    </div>
                </section>
                
            </div>
        </Layout>
    )
}
export default ArchivePage
