import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <footer id="footer">
            <div className="container">
                <div className="gap">
                    <div className="foot-t">
                        <div className="foot_t_left">London Based <br /> Creative Studio</div>
                        <div className="foot_t_center">
                            <p>
                                301 The Greenhouse,<br /> 
                                Custard Factory, London, E2 8DY.<br />
                                <a href="#!">sales@domain.com</a> | +44 (0) 123 456 7890
                            </p>
                        </div>
                        <div className="foot_t_right">
                            <div className="foot-logo"><a href="#!"><img src="./img/logo-white.png" alt="footImg" /></a></div>
                            <ul className="sns">
                                <li><a href="#!" title="TWITTER">TWITTER</a></li>
                                <li><a href="#!" title=" FACEBOOK"> FACEBOOK</a></li>
                                <li><a href="#!" title=" INSTAGRAM"> INSTAGRAM</a></li>
                                <li><a href="#!" title=" DRIBBBLE"> DRIBBBLE</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="foot-b">
                        <div className="Concept">POFO - Portfolio Concept Theme</div>
                        <div className="copy">© 2021 POFO is Proudly Powered by ThemeZaa</div>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default FooterComponent;