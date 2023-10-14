import React from "react";
import FacebookIcon from "../components/icons/facebook-icon";
import LinkedinIcon from "../components/icons/linkedin-icon";
import MailIcon from "../components/icons/mail-icon";
import PhoneIcon from "../components/icons/phone-icon";
import TwitterIcon from "../components/icons/twitter-icon";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <section className="Mzn-section" id="contact">
      <div className="Mzn-container">
        <div className="Mzn-contact">
          <div className="Mzn-contact__left">
            <SectionTitle heading="CONTACT" subHeading="Contact with me" />
            <ul className="Mzn-contact__addresses">
              <li className="Mzn-contact__address">
                <MailIcon />
                <a href="mailto:mizanurmgt@gmail.com">mizanurmgt@gmail.com</a>
              </li>
              <li className="Mzn-contact__address">
                <PhoneIcon />
                <span>+88 01735 92 95 61 or +88 01611 92 95 61</span>
              </li>
              <li className="Mzn-contact__address">
                <LinkedinIcon />
                <a href="https://www.linkedin.com/in/mizanrahmankhan/">
                  linkedin
                </a>
              </li>
              <li className="Mzn-contact__address">
                <TwitterIcon />
                <a href="https://twitter.com/mizanrahmankhan">twitter</a>
              </li>
              <li className="Mzn-contact__address">
                <FacebookIcon />
                <a href="https://www.facebook.com/me.mizanrahmankhan">
                  facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="Mzn-contact__right">
            <img
              src="./images/contact.webp"
              alt="contact"
              style={{ borderRadius: 8 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
