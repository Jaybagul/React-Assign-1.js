import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-social">
            <a href="https://www.facebook.com" className="footer-link">Facebook</a>
            <a href="https://www.twitter.com" className="footer-link">Twitter</a>
            <a href="https://www.instagram.com" className="footer-link">Instagram</a>
            <a href="https://www.linkedin.com" className="footer-link">LinkedIn</a>
        </div>
        <div className="footer-contact">
            <p>Contact us: <a href="mailto:info@example.com" class="footer-email">info@example.com</a></p>
        </div>
        <div className="footer-copyright">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
    </footer>
    );
}

export default Footer;

