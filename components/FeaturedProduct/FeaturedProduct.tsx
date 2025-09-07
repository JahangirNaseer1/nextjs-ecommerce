import React from 'react';
import Image from 'next/image';
import styles from './FeaturedProduct.module.scss';

const FeaturedProduct: React.FC = () => (
    <section className={styles.featuredSection}>
        <div className='row w-100'>
            <div className={`${styles.ImageCol}  col-lg-8 col-8 col-sm-12 col-xs-12`}>
                <Image className='w-100 img-fluid' src="/images/hero-bg-2.jpg" alt="Featured Product" layout="responsive" width={800} height={600} />
            </div>
            <div className='col-4 col-lg-4 col-sm-12 col-xs-12 d-grid gap-5'>
                <div className={styles.ProductInfo}>
                    <h2>Featured Product</h2>
                    <p>Discover our latest featured product, crafted with precision and designed to elevate your lifestyle. Experience unparalleled quality and innovation in every detail.</p>

                </div>
                <div className={`${styles.ProductCard} d-flex flex-column justify-content-between align-items-start`}>
                    {/* <img className='w-100' src="./images/ignis.png" alt="" /> */}
                    <Image src="/images/ignis.png" loading='lazy' alt="Ignis Watch" height={350} width={350} />
                    <div className='w-100 p-4 pt-4'>
                        <div className="d-flex flex-row justify-content-between align-items-start">
                            <div>
                                <h3>Ignis</h3>
                                <p className='m-0'>Eau de Parfum</p>

                            </div>
                            <p className='m-0'>$299.00</p>
                        </div>
                        <button className="mt-4 btn btn-elegant">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default FeaturedProduct;
