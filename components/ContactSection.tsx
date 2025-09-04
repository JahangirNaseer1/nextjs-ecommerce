import React from 'react';
import styles from '../styles/ContactSection.module.scss';

const ContactSection: React.FC = () => (
    <section className={styles.contactSection}>
        <div className={styles.inner}>
            <div className={styles.info}>
                <div className={styles.infoItem}>
                    <span className={styles.icon}>
                        <svg width="22" height="22" fill="none" stroke="#1a73e8" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" /><polyline points="2,5 12,13 22,5" /></svg>
                    </span>
                    <div>
                        <div className={styles.label}>Email</div>
                        <div className={styles.value}>contact@yourdomain.com</div>
                    </div>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.icon}>
                        <svg width="22" height="22" fill="none" stroke="#1a73e8" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21s-6-5.686-6-10A6 6 0 0 1 18 11c0 4.314-6 10-6 10z" /><circle cx="12" cy="11" r="2.5" /></svg>
                    </span>
                    <div>
                        <div className={styles.label}>Address</div>
                        <div className={styles.value}>123 Main St, City, Country</div>
                    </div>
                </div>
                <div className={styles.infoText}>
                    Reach out to us for any queries or support. We usually respond within 24 hours.
                </div>
            </div>
            <div className={styles.formWrapper}>
                <h2>Contact Us</h2>
                <form className={styles.form}>
                    <input type="text" className="form-control" placeholder="Your Name" required />
                    <input type="email" className="form-control" placeholder="Your Email" required />
                    <textarea className="form-control" placeholder="Your Message" rows={4} required />
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>
);

export default ContactSection;
