import React from 'react'
import { Link } from 'gatsby'
import Seo from "../components/SEO"
import Layout from '../components/Layout'

//import logo from '../images/logo.png'
import pic07 from '../images/archive.jpg'

const ArchivePage = ({ data }) => {

    return (
        <Layout>
            <Seo title="アーカイブ" image={`${pic07}`} />

            <div id="main">
                <section id="banner" style={{backgroundImage: `url(${pic07})`}}>
                    <div className="inner">
                        <header className="major">
                            <h2>Archive</h2>
                        </header>
                    </div>
                </section>

                <div id="main">
                    <div className="inner">

                        <header className="major">
                            <p>2023年度</p>
                        </header>
                        
                        <ul className="actions">
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2023年度U-12`} className="button small rounded">U-12(6年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2023年度U-11`} className="button small rounded">U-11(5年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2023年度U-10`} className="button small rounded">U-10(4年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2023年度U-09`} className="button small rounded">U-09(3年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2023年度U-08`} className="button small rounded">U-08(2年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2023年度U-07`} className="button small rounded">U-07(1年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2023年度U-06`} className="button small rounded">U-06(キッズ)</Link></li>
                        </ul>


                        <header className="major">
                            <p>2022年度</p>
                        </header>
                        
                        <ul className="actions">
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2022年度U-12`} className="button small rounded">U-12(6年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2022年度U-11`} className="button small rounded">U-11(5年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2022年度U-10`} className="button small rounded">U-10(4年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2022年度U-09`} className="button small rounded">U-09(3年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2022年度U-07`} className="button small rounded">U-07(1年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2022年度U-06`} className="button small rounded">U-06(キッズ)</Link></li>
                        </ul>

                        <header className="major">
                            <p>2021年度</p>
                        </header>

                        <ul className="actions">
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2021年度U-12`} className="button small rounded">U-12(6年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2021年度U-11`} className="button small rounded">U-11(5年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2021年度U-10`} className="button small rounded">U-10(4年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2021年度U-09`} className="button small rounded">U-09(3年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2021年度U-08`} className="button small rounded">U-08(2年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2021年度U-07`} className="button small rounded">U-07(1年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2021年度U-06`} className="button small rounded">U-06(キッズ)</Link></li>
                        </ul>

                        <header className="major">
                            <p>2020年度</p>
                        </header>

                        <ul className="actions">
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2020年度U-12`} className="button small rounded">U-12(6年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2020年度U-11`} className="button small rounded">U-11(5年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2020年度U-10`} className="button small rounded">U-10(4年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2020年度U-09`} className="button small rounded">U-09(3年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2020年度U-08`} className="button small rounded">U-08(2年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2020年度U-07`} className="button small rounded">U-07(1年生)</Link></li>
                            <li style={{'margin-bottom':'10px'}}><Link to={`/category/2020年度U-06`} className="button small rounded">U-06(キッズ)</Link></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </Layout>
    )
}
export default ArchivePage
