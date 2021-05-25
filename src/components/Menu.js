import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">クラブについて</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/coach">コーチ紹介</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/map">活動場所</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/join">入部について</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/schedule">活動予定表</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/journal">試合結果</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/archive">アーカイブ</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/doc">ドキュメント</Link></li>
            </ul>
        </div>
        <button className="close_b" type="button" onClick={props.onToggleMenu}>Close</button>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
