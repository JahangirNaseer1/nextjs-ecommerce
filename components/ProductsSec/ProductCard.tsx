import React from 'react';
import styles from './ProductCard.module.scss';
import Image from 'next/image';

interface Feature {
    icon: React.ReactNode;
    text: string;
}

interface ProductCardProps {
    image: string;
    title: string;
    subtitle?: string;
    description?: string;
    features?: Feature[];
    discoverUrl?: string;
    addToBagUrl?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    subtitle,
    description,
    features = [],
    discoverUrl = '#',
    addToBagUrl = '#',
}) => (
    <div className={styles.productCard + ' position-relative z-10 grid  w-100 align-items-center justify-items-start border border-white border-opacity-10  text-left'}>
        <div className={styles.bgImage + ' position-absolute inset-0 z-0'}>
            <Image src={image} alt="" fill className="object-cover opacity-40 md:opacity-100" style={{ position: 'absolute' }} />
        </div>
        <div className={styles.content + ' position-relative z-10 grid col-6 col-md-6 col-lg-6 col-sm-12 col-xs-12'}>
            <h2 className="m-0 font-display">{title}</h2>
            {subtitle && <p className="m-0 text-base">{subtitle}</p>}
            {description && <div className="mb-0"><p>{description}</p></div>}
            {features.length > 0 && (
                <div className="mb-4">
                    <p className="mb-2 text-base fw-semibold text-uppercase">Features</p>
                    <div className={`${styles.featureList} d-grid m-0 p-0`}>
                        {features.map((f, i) => (
                            <p className="d-flex align-items-center my-1 gap-2" key={i}>
                                {f.icon}
                                {f.text}
                            </p>
                        ))}
                    </div>
                </div>
            )}
            <div className="d-flex flex-wrap gap-4">
                <a className="btn-elegant text-uppercase" href={discoverUrl}>Discover</a>
                <a className="btn btn-default px-5 py-3 text-uppercase" href={addToBagUrl}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" className="me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"></path></svg>
                    <span>Add to bag</span>
                </a>
            </div>
        </div>
    </div>
);

export default ProductCard;
