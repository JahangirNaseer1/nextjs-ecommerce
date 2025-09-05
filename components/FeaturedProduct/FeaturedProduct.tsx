import React from 'react';
import styles from './FeaturedProduct.module.scss';

const FeaturedProduct: React.FC = () => (
    <section className={styles.featuredSection}>
        <div className='row w-100'>
            <div className={`${styles.ImageCol}  col-lg-8 col-8 col-sm-12 col-xs-12`}>
                <img className='w-100 img-fluid' src="./images/hero-bg-2.jpg" alt="Featured Product" />
            </div>
            <div className='col-4 col-lg-4 col-sm-12 col-xs-12 d-flex flex-column justify-content-between'>
                <div className={styles.ProductInfo}>
                    <h2>Featured Product</h2>
                    <p>Discover our latest featured product, crafted with precision and designed to elevate your lifestyle. Experience unparalleled quality and innovation in every detail.</p>

                </div>
                <div className={styles.ProductCard}>
                    <img className='w-100' src="./images/ignis.png" alt="" />
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h3>Ignis Watch</h3>
                        <p>$299.00</p>
                    </div>
                    <button className="btn btn-elegant">Shop Now</button>
                </div>
            </div>
        </div>
    </section>
);

export default FeaturedProduct;
