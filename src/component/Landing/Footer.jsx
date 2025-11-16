import React from "react";


function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo-wrapper" aria-hidden="true">
            {/* simple inline SVG logo */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" fill="#0077ff" />
              <path d="M6 12l3 3 9-9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 className="footer-company">Innovations With OditechGlobal</h3>
            <p className="footer-tagline">Crafting delightful digital experiences</p>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="socials" aria-label="Social media links">
              <a className="social-btn" href="https://www.naukri.com/mnjuser/profile?id=&altresid" aria-label="Twitter" target="_blank">
                {/* Twitter svg */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M22 5.92c-.66.29-1.37.48-2.12.57.76-.46 1.34-1.18 1.61-2.04-.71.42-1.5.73-2.34.9A3.57 3.57 0 0016.11 4c-1.98 0-3.59 1.6-3.59 3.58 0 .28.03.56.09.83-2.99-.15-5.65-1.58-7.43-3.75-.31.53-.49 1.15-.49 1.81 0 1.25.64 2.35 1.61 3-.6-.02-1.16-.18-1.65-.45v.05c0 1.74 1.24 3.19 2.88 3.52-.3.08-.62.12-.95.12-.23 0-.46-.02-.68-.06.46 1.43 1.8 2.47 3.38 2.5A7.17 7.17 0 012 19.54 10.1 10.1 0 008.29 21c6.29 0 9.73-5.21 9.73-9.73v-.44c.67-.48 1.25-1.08 1.71-1.77-.62.28-1.28.47-1.97.56z" />
                </svg>
                
              </a>

              <a className="social-btn" href="https://www.linkedin.com/in/manaswini-sasmal-b77a21162" aria-label="LinkedIn" target="_blank">
                {/* LinkedIn svg */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.34 6 7.67V24h-5V15.5c0-2.05-.04-4.69-2.86-4.69-2.87 0-3.31 2.25-3.31 4.55V24h-5V8z"/>
                </svg>
              </a>

              <a className="social-btn" href="https://github.com/Monisasmal" aria-label="GitHub" target="_blank">
                {/* GitHub svg */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.2 9.16 7.64 10.64.56.1.76-.24.76-.53 0-.26-.01-1.13-.02-2.05-3.11.68-3.77-1.5-3.77-1.5-.51-1.36-1.25-1.72-1.25-1.72-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.17 1.73 1.17 1 .17 1.6-.76 1.6-.76.9-1.54 2.36-1.1 2.94-.84.09-.66.35-1.1.63-1.36-2.48-.28-5.09-1.24-5.09-5.5 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.4.11-2.92 0 0 .92-.29 3.03 1.13a10.5 10.5 0 012.76-.37c.94.01 1.9.13 2.76.37 2.1-1.42 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.78 1.13 1.77 1.13 2.98 0 4.27-2.62 5.22-5.11 5.49.36.32.68.93.68 1.88 0 1.36-.01 2.45-.01 2.78 0 .29.2.64.77.53C20.3 20.91 23.5 16.71 23.5 11.75 23.5 5.48 18.52.5 12 .5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} oditechglobal Innovations — All rights reserved.</small>
          <button className="back-top" onClick={scrollTop} aria-label="Back to top">Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
