import React from 'react';
import styles from '../styles/ImageTextSection.module.scss';

const ImageTextSection: React.FC = () => (
    <section className={styles.imageTextSection}>
        <div className={styles.imageWrapper}>
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Showcase" />
        </div>
        <div className={styles.textWrapper}>
            <h2>Modern Stack</h2>
            <p>Enjoy the power of Next.js, SCSS, and Bootstrap for rapid development and easy customization. Responsive layouts and reusable patterns included.</p>
        </div>
    </section>
);

export default ImageTextSection;
