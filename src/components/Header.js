import React from 'react'
import PropTypes from 'prop-types'
//import cdlogo from '../images/cdlogo-white.png'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
            {/**<img className="logo" src={cdlogo} alt="" />**/}
        </div>
        <div className="content">
            <div className="inner">
                <h1>Collective Divinity</h1>
                <p>SUBHEADING DESCRIBING AND INTRODUCING WHAT THIS WEBSITE WILL BE ABOUT: <br>
                </br> VAPORIZERS, VIDEOS, PODCAST, REVIEWS,PICTURES </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Videos</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Reviews</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Extra</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
