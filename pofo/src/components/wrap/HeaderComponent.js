import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <header id="header">
                <div className="container">
                    <div className="gap">
                        <div className="left-box">
                            <h1><a href="#!" title="logo"><img src="./img/logo.png" alt="" /></a></h1>
                        </div>
                        <div className="right-box">
                            <div className="hamberMenu">
                                <span><i className="fas fa-bars"></i></span>
                            </div>
                            <div className="mobileNav">
                                <ul>
                                    <li><a href="#!" title="">HOME</a> <span>▼</span></li>
                                    <li><a href="#!" title="">PAGES</a> <span>▼</span></li>
                                    <li><a href="#!" title="">PORTFOLIO</a> <span>▼</span></li>
                                    <li><a href="#!" title="">BLOG</a> <span>▼</span></li>
                                    <li><a href="#!" title="">ELEMENTS</a> <span>▼</span></li>
                                    <li><a href="#!" title="">FEATURES</a> <span>▼</span></li>
                                </ul>
                            </div>

                            <nav id="nav">
                                <ul>
                                    <li><a href="#!" title="HOME" className="main-btn">HOME</a>
                                    <div className="sub sub1356">
                                        <ul>
                                            <li>
                                                <dl>
                                                    <dt><a href="#!" title="CLASSIC HOMEPAGES">CLASSIC HOMEPAGES</a></dt>
                                                    <dd><a href="#!" title="Classic Corporate">Classic Corporate</a></dd>
                                                    <dd><a href="#!" title="Classic Digital Agency">Classic Digital Agency</a></dd>
                                                    <dd><a href="#!" title="">Classic Innovation Agency</a></dd>
                                                    <dd><a href="#!" title="">Classic Web Agency</a></dd>
                                                    <dd><a href="#!" title="">Classic One Page</a></dd>
                                                    <dt><a href="#!" title="">Classic Start Up</a></dt>
                                                    <dd><a href="#!" title="">Classic Interactive Agency</a></dd>
                                                    <dd><a href="#!" title="">Classic Business</a></dd>
                                                    <dd><a href="#!" title="">Classic Shop</a></dd>
                                                </dl>
                                            </li>
                                            <li>
                                                    <dl>
                                                        <dt><a href="#!">CREATIVE HOMEPAGES</a></dt>
                                                        <dd><a href="#!">Creative Studio</a></dd>
                                                        <dd><a href="#!">Creative Business</a></dd>
                                                        <dd><a href="#!">Creative Simple Portfolio</a></dd>
                                                        <dd><a href="#!">Creative Branding Agency</a></dd>
                                                        <dd><a href="#!">Creative Minimalist Portfolio</a></dd>
                                                        <dd><a href="#!">Creative Small Business</a></dd>
                                                        <dd><a href="#!">Creative Designer</a></dd>
                                                        <dd><a href="#!">Creative Agency</a></dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                        <dt><a href="#!">PORTFOLIO HOMEPAGES</a></dt>
                                                        <dd><a href="#!">Portfolio Minimal</a></dd>
                                                        <dd><a href="#!">Portfolio Multiple Carousel</a></dd>
                                                        <dd><a href="#!">Portfolio Centered Slides</a></dd>
                                                        <dd><a href="#!">Portfolio Personal</a></dd>
                                                        <dd><a href="#!">Portfolio Metro</a></dd>
                                                        <dd><a href="#!">Portfolio Full Screen – Vertical</a></dd>
                                                        <dd><a href="#!">Portfolio Photographer</a></dd>
                                                        <dd><a href="#!">Portfolio Parallax</a></dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                        <dt><a href="#!">BLOG HOMEPAGES</a></dt>
                                                        <dd><a href="#!">Blog Grid</a></dd>
                                                        <dd><a href="#!">Blog Masonry</a></dd>
                                                        <dd><a href="#!">Blog Clean</a></dd>
                                                        <dd><a href="#!">Blog Personal</a></dd>
                                                    </dl>
                                                </li>
                                        </ul>
                                    </div> 
                                    </li>
                                    <li><a href="#!" title="PAGES" className="main-btn">PAGES</a>
                                        <div className="sub sub24">
                                            <ul>
                                                <li><a href="#!" title="'"><span className="text">About</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">About Us Simple</a></li>
                                                        <li><a href="#!" title="">About Us Classic</a></li>
                                                        <li><a href="#!" title="">About Us Modern</a></li>
                                                        <li><a href="#!" title="">About Me</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#!" title="'"><span className="text">Services</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">Services Simple</a></li>
                                                        <li><a href="#!" title="">Services Classic</a></li>
                                                        <li><a href="#!" title="">Services Modern</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#!" title=""><span className="text">Contact</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">Contact Simple</a></li>
                                                        <li><a href="#!" title="">Contact Classic</a></li>
                                                        <li><a href="#!" title="">Contact Classic – Style 02</a></li>
                                                        <li><a href="#!" title="">Contact Modern</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#!" title=""><span className="text">Team</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">Team Simple</a></li>
                                                        <li><a href="#!" title="">Team Classic</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#!" title=""><span className="text">Addition Pages</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">Our Clients</a></li>
                                                        <li><a href="#!" title="">Error 404</a></li>
                                                        <li><a href="#!" title="">Coming Soon</a></li>
                                                        <li><a href="#!" title="">Coming Soon – Style 02</a></li>
                                                        <li><a href="#!" title="">Faq</a></li>
                                                        <li><a href="#!" title="">Maintenance</a></li>
                                                        <li><a href="#!" title="">Search Result</a></li>
                                                        <li><a href="#!" title="">Pricing</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="#!" title="PORTFOLIO" className="main-btn">PORTFOLIO</a>
                                        <div className="sub sub1356">
                                            <ul>
                                                <li>
                                                    <dl>
                                                        <dt><a href="#!" title="CLASSIC HOMEPAGES">GRID – FULL WIDTH LAYOUTS</a></dt>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Grid Overlay</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Grid With Icon</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Grid Transform</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Grid Zooming</a></dd>
                                                        <dt><a href="#!" title="CLASSIC HOMEPAGES">MASONRY – FULL WIDTH LAYOUTS</a></dt>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Masonry Overlay</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Masonry With Icon</a></dd>
                                                        <dt><a href="#!" title="CLASSIC HOMEPAGES">METRO – FULL WIDTH LAYOUTS</a></dt>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Metro Overlay</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Metro With Icon</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Metro Transform</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Metro Zooming</a></dd>
                                                        <dt><a href="#!" title="CLASSIC HOMEPAGES">OTHER – FULL WIDTH LAYOUTS</a></dt>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Image Gallery</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Justified</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Carousel</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Parallax</a></dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                        <dt><a href="#!" title="CLASSIC HOMEPAGES">GRID – FULL WIDTH LAYOUTS</a></dt>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Grid Overlay</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Grid With Icon</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Grid Transform</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Grid Zooming</a></dd>
                                                        <dt><a href="#!" title="CLASSIC HOMEPAGES">MASONRY – FULL WIDTH LAYOUTS</a></dt>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Masonry Overlay</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Masonry With Icon</a></dd>
                                                        <dt><a href="#!" title="CLASSIC HOMEPAGES">METRO – FULL WIDTH LAYOUTS</a></dt>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Metro Overlay</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Metro With Icon</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Metro Transform</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Metro Zooming</a></dd>
                                                        <dt><a href="#!" title="CLASSIC HOMEPAGES">OTHER – FULL WIDTH LAYOUTS</a></dt>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Image Gallery</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Justified</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Carousel</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Parallax</a></dd>
                                                    </dl>
                                                    
                                                </li>
                                                <li>
                                                    <dl>
                                                        <dt><a href="#!" title="CLASSIC HOMEPAGES">SINGLE PROJECT PAGE</a></dt>
                                                        <dd><a href="#!" title="Classic Corporate">Single Project Page 01</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Single Project Page 02</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Single Project Page 03</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Single Project Page 04</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Single Project Page 05</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Single Project Page 06</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Single Project Page 07</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Single Project Page 08</a></dd>
                                                        <dt><a href="#!" title="CLASSIC HOMEPAGES">PORTFOLIO COLUMNS</a></dt>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Two Columns</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Three Columns</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Four Columns</a></dd>
                                                        <dd><a href="#!" title="Classic Corporate">Portfolio Five Columns</a></dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <div>
                                                        <p><a href="#!" title=""><img src="./img/menu-banner-01.jpg" alt="bannerImg" /></a></p>
                                                        <p><a href="#!" title=""><img src="./img/menu-banner-02.jpg" alt="bannerImg" /></a></p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>                                 
                                    </li>
                                    <li><a href="#!" title="BLOG" className="main-btn">BLOG</a>
                                        <div className="sub sub24">
                                            <ul>
                                                <li><a href="#!" title="'"><span className="text"> Blog Standard</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">About Us Simple</a></li>
                                                        <li><a href="#!" title="">About Us Classic</a></li>
                                                        <li><a href="#!" title="">About Us Modern</a></li>
                                                        <li><a href="#!" title="">About Me</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#!" title="'"><span className="text">Blog Classic</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">Services Simple</a></li>
                                                        <li><a href="#!" title="">Services Classic</a></li>
                                                        <li><a href="#!" title="">Services Modern</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#!" title=""><span className="text">Blog List</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">Contact Simple</a></li>
                                                        <li><a href="#!" title="">Contact Classic</a></li>
                                                        <li><a href="#!" title="">Contact Classic – Style 02</a></li>
                                                        <li><a href="#!" title="">Contact Modern</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#!" title=""><span className="text">Blog Grid</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">Team Simple</a></li>
                                                        <li><a href="#!" title="">Team Classic</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#!" title=""><span className="text">Blog Masonary</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">Our Clients</a></li>
                                                        <li><a href="#!" title="">Error 404</a></li>
                                                        <li><a href="#!" title="">Coming Soon</a></li>
                                                        <li><a href="#!" title="">Coming Soon – Style 02</a></li>
                                                        <li><a href="#!" title="">Faq</a></li>
                                                        <li><a href="#!" title="">Maintenance</a></li>
                                                        <li><a href="#!" title="">Search Result</a></li>
                                                        <li><a href="#!" title="">Pricing</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#!" title=""><span className="text">Blog Clean</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">Team Simple</a></li>
                                                        <li><a href="#!" title="">Team Classic</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#!" title=""><span className="text">Blog Images</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">Team Simple</a></li>
                                                        <li><a href="#!" title="">Team Classic</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#!" title=""><span className="text">Blog Only Text</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">Team Simple</a></li>
                                                        <li><a href="#!" title="">Team Classic</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#!" title=""><span className="text">Post Layout</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">Team Simple</a></li>
                                                        <li><a href="#!" title="">Team Classic</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#!" title=""><span className="text">Post Type</span> <span><i className="fas fa-angle-right"></i></span></a>
                                                    <ul className="sub3">
                                                        <li><a href="#!" title="">Team Simple</a></li>
                                                        <li><a href="#!" title="">Team Classic</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>                                
                                    </li>
                                    <li><a href="#!" title="ELEMENTS" className="main-btn">ELEMENTS</a>
                                        <div className="sub sub1356">
                                            <ul>
                                                <li>
                                                    <dl>
                                                        <dt><a href="#!" title="CLASSIC HOMEPAGES">CLASSIC HOMEPAGES</a></dt>
                                                        <dd><a href="#!" title="Classic Corporate">Classic Corporate</a></dd>
                                                        <dd><a href="#!" title="Classic Digital Agency">Classic Digital Agency</a></dd>
                                                        <dd><a href="#!" title="">Classic Innovation Agency</a></dd>
                                                        <dd><a href="#!" title="">Classic Web Agency</a></dd>
                                                        <dd><a href="#!" title="">Classic One Page</a></dd>
                                                        <dt><a href="#!" title="">Classic Start Up</a></dt>
                                                        <dd><a href="#!" title="">Classic Interactive Agency</a></dd>
                                                        <dd><a href="#!" title="">Classic Business</a></dd>
                                                        <dd><a href="#!" title="">Classic Shop</a></dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                        <dt><a href="#!">CREATIVE HOMEPAGES</a></dt>
                                                        <dd><a href="#!">Creative Studio</a></dd>
                                                        <dd><a href="#!">Creative Business</a></dd>
                                                        <dd><a href="#!">Creative Simple Portfolio</a></dd>
                                                        <dd><a href="#!">Creative Branding Agency</a></dd>
                                                        <dd><a href="#!">Creative Minimalist Portfolio</a></dd>
                                                        <dd><a href="#!">Creative Small Business</a></dd>
                                                        <dd><a href="#!">Creative Designer</a></dd>
                                                        <dd><a href="#!">Creative Agency</a></dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                        <dt><a href="#!">PORTFOLIO HOMEPAGES</a></dt>
                                                        <dd><a href="#!">Portfolio Minimal</a></dd>
                                                        <dd><a href="#!">Portfolio Multiple Carousel</a></dd>
                                                        <dd><a href="#!">Portfolio Centered Slides</a></dd>
                                                        <dd><a href="#!">Portfolio Personal</a></dd>
                                                        <dd><a href="#!">Portfolio Metro</a></dd>
                                                        <dd><a href="#!">Portfolio Full Screen – Vertical</a></dd>
                                                        <dd><a href="#!">Portfolio Photographer</a></dd>
                                                        <dd><a href="#!">Portfolio Parallax</a></dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                        <dt><a href="#!">BLOG HOMEPAGES</a></dt>
                                                        <dd><a href="#!">Blog Grid</a></dd>
                                                        <dd><a href="#!">Blog Masonry</a></dd>
                                                        <dd><a href="#!">Blog Clean</a></dd>
                                                        <dd><a href="#!">Blog Personal</a></dd>
                                                    </dl>
                                                </li>
                                            </ul>
                                        </div>                                
                                    </li>
                                    <li><a href="#!" title="FEATURES" className="main-btn">FEATURES</a>
                                        <div className="sub sub1356">
                                            <ul>
                                                <li>
                                                    <dl>
                                                        <dt><a href="#!" title="CLASSIC HOMEPAGES">CLASSIC HOMEPAGES</a></dt>
                                                        <dd><a href="#!" title="Classic Corporate">Classic Corporate</a></dd>
                                                        <dd><a href="#!" title="Classic Digital Agency">Classic Digital Agency</a></dd>
                                                        <dd><a href="#!" title="">Classic Innovation Agency</a></dd>
                                                        <dd><a href="#!" title="">Classic Web Agency</a></dd>
                                                        <dd><a href="#!" title="">Classic One Page</a></dd>
                                                        <dt><a href="#!" title="">Classic Start Up</a></dt>
                                                        <dd><a href="#!" title="">Classic Interactive Agency</a></dd>
                                                        <dd><a href="#!" title="">Classic Business</a></dd>
                                                        <dd><a href="#!" title="">Classic Shop</a></dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                        <dt><a href="#!">CREATIVE HOMEPAGES</a></dt>
                                                        <dd><a href="#!">Creative Studio</a></dd>
                                                        <dd><a href="#!">Creative Business</a></dd>
                                                        <dd><a href="#!">Creative Simple Portfolio</a></dd>
                                                        <dd><a href="#!">Creative Branding Agency</a></dd>
                                                        <dd><a href="#!">Creative Minimalist Portfolio</a></dd>
                                                        <dd><a href="#!">Creative Small Business</a></dd>
                                                        <dd><a href="#!">Creative Designer</a></dd>
                                                        <dd><a href="#!">Creative Agency</a></dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                        <dt><a href="#!">PORTFOLIO HOMEPAGES</a></dt>
                                                        <dd><a href="#!">Portfolio Minimal</a></dd>
                                                        <dd><a href="#!">Portfolio Multiple Carousel</a></dd>
                                                        <dd><a href="#!">Portfolio Centered Slides</a></dd>
                                                        <dd><a href="#!">Portfolio Personal</a></dd>
                                                        <dd><a href="#!">Portfolio Metro</a></dd>
                                                        <dd><a href="#!">Portfolio Full Screen – Vertical</a></dd>
                                                        <dd><a href="#!">Portfolio Photographer</a></dd>
                                                        <dd><a href="#!">Portfolio Parallax</a></dd>
                                                    </dl>
                                                </li>
                                                <li>
                                                    <dl>
                                                        <dt><a href="#!">BLOG HOMEPAGES</a></dt>
                                                        <dd><a href="#!">Blog Grid</a></dd>
                                                        <dd><a href="#!">Blog Masonry</a></dd>
                                                        <dd><a href="#!">Blog Clean</a></dd>
                                                        <dd><a href="#!">Blog Personal</a></dd>
                                                    </dl>
                                                </li>
                                            </ul>
                                        </div>                                
                                    </li>
                                </ul>
                            </nav>
                            <aside className="aside">
                                <span><i></i></span>
                                <span><a href="#!" title="search"><i className="fas fa-search"></i></a></span>
                                <span><i></i></span>
                                <span><a href="#!" title="cart" className="cart"><i className="fas fa-shopping-cart"></i></a></span>
                            </aside>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;