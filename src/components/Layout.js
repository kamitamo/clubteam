import React from "react"

import '../styles/scss/main.scss'
import Header from "./Header"
import Menu from './Menu'
//import Ads from './Ads'
import Contact from './Contact'
import Footer from './Footer'

import CookieConsent from 'react-cookie-consent'


class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount () {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''});
        }, 100);
    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }


    render() {
        const { children } = this.props




        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <div id="wrapper">

                    <CookieConsent enableDeclineButton
                        location="bottom"
                        buttonText="同意する"
                        declineButtonText="同意しない"
                        cookieName="gatsby-gdpr-google-analytics">
                        このサイトでは、当ウェブサイトでの体験を向上させる目的にCookieを使用します。
                        Cookieには、ウェブサイトの機能に不可欠なものと、利用状況の目的で使用されているものが存在します。
                    </CookieConsent>


                    <Header onToggleMenu={this.handleToggleMenu} />
                    {children}
                    {/*<Ads />*/}
                    <Contact />
                    <Footer />
                    </div>
                    <Menu onToggleMenu={this.handleToggleMenu} />
                    </div>
                    )
    }
}


export default Layout
