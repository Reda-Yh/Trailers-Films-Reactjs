import React from 'react'
import './Footer.css'
import FooterNavItem from './FooterNavItem';

const Footer = () => {
    const usefullLinks = [
        'Home',
        'Movies',
        'My List',
        'Terms of services',
        'Primary Policy',
    ];
    const locations = [
        'Dolorum option',
        'Mon rem rerum',
        'Cras fermentum adio',
        'Justo eget',
        'Fermentum iaculis',
    ];
    return (
        <footer id='footer' className='footer'>
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="/" className="logo d-flex align-items-center">
                                <span>CINEMA</span>
                            </a>
                            <p>
                                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.
                            </p>
                            <div className="social-links mt-3">
                                <a href="#" className="twitter">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                                <a href="#" className="facebook">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                                <a href="#" className="instagram">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                                <a href="#" className="youtube">
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-2 col-6 footer-links'>
                            <h4>
                                Useful Links
                            </h4>
                            <ul>
                                {usefullLinks.map(link => (
                                    <FooterNavItem key={link} name={link} />
                                ))}
                            </ul>
                        </div>

                        <div className='col-lg-2 col-6 footer-links'>
                            <h4>
                                Our Cinemas
                            </h4>
                            <ul>
                                {locations.map(link => (
                                    <FooterNavItem key={link} name={link} />
                                ))}
                            </ul>
                        </div>

                        <div className='col-lg-3 col-md-12 footer-contact text-center text-md-start'>
                            <h4>
                                Contact Us
                            </h4>
                            <p>
                                Agadir <br />
                                Morocco <br />
                                <strong>Email:</strong>redayahyapro@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='copyright'>
                    &copy; Copyright{' '}
                    <strong>
                        <span>Redayh</span>
                    </strong>
                    . All Rights Reserved
                </div>
                <div className='credits'>
                    Designed by <a href='#'>Redayh</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer