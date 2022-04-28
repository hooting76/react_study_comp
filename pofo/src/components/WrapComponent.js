import React, { Component } from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import SideMenuComponent from './wrap/SideMenuComponent';
import TopBtnComponent from './wrap/TopBtnComponent';

class WrapComponent extends Component {
    render() {
        return (
            <div id="wrap">
                <HeaderComponent />
                <MainComponent />
                <FooterComponent />
                <SideMenuComponent />
                <TopBtnComponent />
            </div>
        );
    }
}

export default WrapComponent;