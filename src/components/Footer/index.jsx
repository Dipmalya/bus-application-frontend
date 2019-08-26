import React from 'react';
import '../../assests/css/header.css';

const Footer = () => (
    <footer className="footer bg-dark">
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo">
                    <a href="http://www.iskcon.org">ISKCON</a>
                </div>
                <div className="footer-social">
                    <ul>
                        <li className="footer-social-facebook">
                            <a href="https://www.facebook.com/iskconglobal">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li className="footer-social-twitter">
                            <a href="https://twitter.com/iskconglobal">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li className="footer-social-youtube">
                            <a href="https://www.youtube.com/channel/UCnQ0YFFLezzd5TEx4j8Dfzw">
                                <i className="fa fa-youtube-play" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;