import React from "react";
import SectionTitle from "../components/SectionTitle";

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const Contact = () => {
  return (
    <section className="Mzn-section" id="contact">
      <div className="Mzn-container">
        <div className="Mzn-contact">
          {/* Left */}
          <div className="Mzn-contact__left">
            <SectionTitle
              heading="CONTACT"
              subHeading="Let's work together"
            />

            <p className="Mzn-contact__desc">
              I&apos;m open to new opportunities and collaborations. Whether
              you have a project in mind or just want to say hello — feel
              free to reach out!
            </p>

            <div className="Mzn-contact__cta">
              <a href="mailto:mizanurmgt@gmail.com" className="Mzn-btn Mzn-btn-primary Mzn-btn-lg">
                Send me an email
              </a>
            </div>

            <ul className="Mzn-contact__addresses">
              <li className="Mzn-contact__address">
                <div className="icon-wrap"><EmailIcon /></div>
                <div className="content-wrap">
                  <span className="label">Email</span>
                  <a href="mailto:mizanurmgt@gmail.com" id="contact-email">
                    mizanurmgt@gmail.com
                  </a>
                </div>
              </li>
              <li className="Mzn-contact__address">
                <div className="icon-wrap"><PhoneIcon /></div>
                <div className="content-wrap">
                  <span className="label">Phone</span>
                  <span>+880 1735-929561</span>
                </div>
              </li>
              <li className="Mzn-contact__address">
                <div className="icon-wrap"><LocationIcon /></div>
                <div className="content-wrap">
                  <span className="label">Location</span>
                  <span>Mirpur-2, Dhaka, Bangladesh</span>
                </div>
              </li>
              <li className="Mzn-contact__address">
                <div className="icon-wrap"><LinkedInIcon /></div>
                <div className="content-wrap">
                  <span className="label">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/mizanrahmankhan/"
                    target="_blank"
                    rel="noreferrer"
                    id="contact-linkedin"
                  >
                    linkedin.com/in/mizanrahmankhan
                  </a>
                </div>
              </li>
              <li className="Mzn-contact__address">
                <div className="icon-wrap"><GitHubIcon /></div>
                <div className="content-wrap">
                  <span className="label">GitHub</span>
                  <a
                    href="https://github.com/mizankhangit"
                    target="_blank"
                    rel="noreferrer"
                    id="contact-github"
                  >
                    github.com/mizankhangit
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="Mzn-contact__right">
            <img
              src="./images/contact.webp"
              alt="Contact Mizanur Rahman"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
