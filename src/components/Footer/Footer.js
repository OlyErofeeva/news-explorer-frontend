import React from 'react';
import './Footer.css';

import {
  navigationLinks,
  externalLinks,
  socialNetworksLinks,
} from '../../configs/links';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <small className="footer__copyright">
          &copy; 2020 NewsExplorer, Powered by News&nbsp;API
        </small>

        <div className="footer__letter-links-wrapper">
          <nav className="footer__navigation">
            <ul className="footer__letter-links">
              {navigationLinks.map((item) => (
                <li key={item.text}>
                  <a
                    className="footer__letter-link"
                    href={item.link}
                    target="_self"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="footer__letter-links">
            {externalLinks.map((item) => (
              <li key={item.text}>
                <a
                  className="footer__letter-link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="footer__social-links">
          {socialNetworksLinks.map((item) => (
            <li className="footer__social-link-item" key={item.text}>
              <a
                className="footer__social-link"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <item.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
