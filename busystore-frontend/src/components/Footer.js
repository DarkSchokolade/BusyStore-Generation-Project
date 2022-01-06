import React from 'react';
import '../css/footer.css';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="row">
            <div className="footer-col">
              <h4>Busy Store</h4>
              <ul>
                <li>about us</li>
                <li>out services</li>
                <li>privacy policy</li>
                <li>affliate program</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li>FAQ</li>
                <li>shipping</li>
                <li>returns</li>
                <li>order status</li>
                <li>payment options</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Online</h4>
              <ul>
                <li>watch</li>
                <li>bag</li>
                <li>shoes</li>
                <li>electronics</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <ul>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
