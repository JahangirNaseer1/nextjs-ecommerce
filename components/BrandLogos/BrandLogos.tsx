import React from 'react';
import styles from './BrandLogos.module.scss';

const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
];


interface BrandLogosProps {
    fullWidth?: boolean;
}

const BrandLogos: React.FC<BrandLogosProps> = ({ fullWidth = false }) => (
    <section className={fullWidth ? `${styles.brandSection} ${styles.fullWidth}` : styles.brandSection}>
        <h2 className={styles.title}>Our Brands</h2>
        <div className={styles.grid}>
            {logos.map((src, i) => (
                <div className={styles.logo} key={i}>
                    <img src={src} alt={`Brand ${i + 1}`} />
                </div>
            ))}
        </div>
    </section>
);

export default BrandLogos;
