import React from 'react'

export default function Header() {
  return (
  
        <div className="full-width-header header-transparent">
          
            <div className="toolbar-area hidden-md">
                <div className="container-fluid">
                    <div className="row rs-vertical-middle">
                        <div className="col-lg-6 col-md-7 col-sm-12">
                            <div className="toolbar-contact">
                                <ul>
                                    <li><i className="fa fa-envelope-o"></i><a href="mailto:info@yourwebsite.com">pikigene01@gmail.com</a></li>
                                    <li><i className="fa fa-phone"></i><a href="tel:+123456789">(+263) 782 954 717</a></li>
                                    <li><i className="fa fa-clock-o"></i> 9:00 AM - 05:00 PM</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-sm-12">
                            <div className="toolbar-sl-share">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li className="get-btn"><a href="#">Free Consultation</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <header id="rs-header" className="rs-header">
              
                <div className="menu-area menu-sticky">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="logo-area">
                                    <a className="light" href="index.html"><img src="images/white-logo.png" alt="logo"/></a>
                                    <a className="dark" href="index.html"><img src="images/logo.png" alt="logo"/></a>
                                </div>
                            </div>
                            <div className="col-lg-9 text-right">
                                <div className="rs-menu-area">
                                    <div className="main-menu">
                                        <div className="mobile-menu">
                                            <a className="rs-menu-toggle">
                                                <i className="fa fa-bars"></i>
                                            </a>
                                        </div>
                                        <nav className="rs-menu">
                                            <ul className="nav-menu">
                                                <li className="rs-mega-menu mega-rs menu-item-has-children current-menu-item"> <a href="#">Home</a>
                                                    <ul className="mega-menu"> 
                                                        <li className="mega-menu-container">
                                                            <div className="mega-menu-innner">
                                                                <div className="single-megamenu">
                                                                    <ul className="sub-menu">
                                                                        <li className="menu-title">Home Multipage</li>
                                                                        <li className="active"><a href="index.html">Home One</a> </li>
                                                                        <li><a href="index2.html">Home Two</a> </li>
                                                                        <li><a href="index3.html">Home Three</a> </li>
                                                                        <li><a href="index4.html">Home Four</a> </li>
                                                                        <li className="last-item"><a href="index5.html">Home Five</a> </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="single-megamenu">
                                                                    <ul className="sub-menu last-sub-menu">
                                                                        <li className="menu-title">Home Onepage</li>
                                                                        <li><a href="onepage1.html">Home1 Onepage</a> </li>
                                                                        <li><a href="onepage2.html">Home2 Onepage</a> </li>
                                                                        <li><a href="onepage3.html">Home3 Onepage</a> </li>
                                                                        <li><a href="onepage4.html">Home4 Onepage</a> </li>
                                                                        <li className="last-item"><a href="onepage5.html">Home5 Onepage</a> </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul> 
                                                </li>

                                                <li><a href="about.html">About Us</a></li>

                                                <li className="menu-item-has-children">
                                                    <a href="#">Practice Areas</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="practice-areas.html">Practice Areas</a> </li>
                                                        <li><a href="practice-single.html">Practice Single</a> </li>
                                                    </ul>
                                                </li>

                                                <li><a href="case-result.html">Case Result</a></li>

                                                <li className="menu-item-has-children">
                                                    <a href="#">Pages</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item-has-children">
                                                            <a href="#">Shop</a>
                                                            <ul className="sub-menu">
                                                                <li><a href="shop.html">Shop</a></li>
                                                                <li><a href="shop-single.html">Shop Single</a></li>
                                                                <li><a href="cart.html">Cart</a></li>
                                                                <li><a href="checkout.html">Checkout</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="#">Attorneys</a>
                                                            <ul className="sub-menu">
                                                                <li><a href="team.html">Team One</a></li>
                                                                <li><a href="team2.html">Team Two</a></li>
                                                                <li><a href="team3.html">Team Three</a></li>
                                                                <li><a href="team-single.html">Team Single</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="#">Others</a>
                                                            <ul className="sub-menu">
                                                                <li><a href="gallery.html">Gallery</a></li>
                                                                <li><a href="faq.html">FAQ</a></li>
                                                                <li><a href="error.html">404 Page</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="menu-item-has-children">
                                                    <a href="#">Blog</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li className="menu-item-has-children">
                                                            <a href="#">Blog Grid</a>
                                                            <ul className="sub-menu">
                                                                <li><a href="blog2.html">Blog 2 Column</a></li>
                                                                <li><a href="blog3.html">Blog 3 Column</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="#">Blog Sidebar</a>
                                                            <ul className="sub-menu">
                                                                <li><a href="blog-left.html">Blog Left Sidebar</a></li>
                                                                <li><a href="blog-right.html">Blog Right Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item-has-children">
                                                            <a href="#">Single Post</a>
                                                            <ul className="sub-menu">
                                                                <li><a href="blog-single-left.html">Post Left Sidebar</a></li>
                                                                <li><a href="blog-single-right.html">Post Right Sidebar</a></li>
                                                                <li><a href="blog-single.html">Full Width Post</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li><a href="contact.html">Contact</a></li>
                                            </ul> 
                                        </nav>
                                    </div>
                                    <div className="expand-btn-inner">
                                        <ul>
                                            <li className="icon-bar cart-inner mini-cart-active">
                                                <a className="cart-icon">
                                                    <span className="cart-count">2</span>
                                                    <i className="flaticon-shopping-bag-1"></i>
                                                </a>
                                                <div className="woocommerce-mini-cart text-left">
                                                    <ul className="cart-icon-product-list">
                                                        <li className="display-flex">
                                                            <div className="icon-cart">
                                                                <a href="#"><i className="fa fa-times"></i></a>
                                                            </div>
                                                            <div className="product-info">
                                                                <a href="cart.html">Law Book</a><br/>
                                                                <span className="quantity">1 × $30.00</span>
                                                            </div>
                                                            <div className="product-image">
                                                                <a href="cart.html"><img src="images/shop/1.jpg" alt="Product Image"/></a>
                                                            </div>
                                                        </li>
                                                        <li className="display-flex">
                                                            <div className="icon-cart">
                                                                <a href="#"><i className="fa fa-times"></i></a>
                                                            </div>
                                                            <div className="product-info">
                                                                <a href="cart.html">Spirit Level</a><br/>
                                                                <span className="quantity">1 × $30.00</span>
                                                            </div>
                                                            <div className="product-image">
                                                                <a href="cart.html"><img src="images/shop/2.jpg" alt="Product Image"/></a>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                    <div className="total-price text-center">
                                                        <span className="subtotal">Subtotal:</span>
                                                        <span className="current-price">$85.00</span>
                                                    </div>

                                                    <div className="cart-btn text-center">
                                                        <a className="crt-btn btn1" href="cart.html">View Cart</a>
                                                        <a className="crt-btn btn2" href="checkout.html">Check Out</a>
                                                    </div>
                                                </div> 
                                            </li>
                                            <li>
                                                <a className="hidden-xs rs-search" data-target=".search-modal" data-toggle="modal" href="#">
                                                    <i className="flaticon-search"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                <nav className="right_menu_togle hidden-md">
                    <div className="close-btn"><span id="nav-close" className="text-center"><i className="fa fa-close"></i></span></div>
                    <div className="canvas-logo">
                        <a href="index.html"><img src="images/logo.png" alt="logo"/></a>
                    </div>
                    <div className="offcanvas-text">
                        <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                    </div>
                    <div className="canvas-contact">
                        <h5 className="canvas-contact-title">Contact Info</h5>
                        <ul className="contact">
                            <li><i className="fa fa-globe"></i>Middle Badda, Dhaka, BD</li>
                            <li><i className="fa fa-phone"></i>+123445789</li>
                            <li><i className="fa fa-envelope"></i><a href="mailto:info@yourcompany.com">info@yourcompany.com</a></li>
                            <li><i className="fa fa-clock-o"></i>10:00 AM - 11:30 PM</li>
                        </ul>
                        <ul className="social">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </nav>
               
            </header>
          
        </div>
  )
}
