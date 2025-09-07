
import React from 'react';
import Image from 'next/image';
import styles from './ProductsSec.module.scss';

import TextSection from '../TextSection/TextSection';
import ProductCard from './ProductCard';


const ProductsSec: React.FC = () => (
    <section className={styles.productSection}>
        <TextSection
            smallHeading="Our Fragrances"
            mainHeading="An Essence for Every Man"
            para="An expression of quiet luxury, Côte Royale is designed for the man who commands attention without seeking it."
        />
        <div className='row w-100'>
            <div className="col-12">
                <ProductCard
                    image="/images/terra-ad.png"
                    title="Terra"
                    subtitle="Eau de Parfum"
                    description="Rooted in strength, Terra is a tribute to nature’s quiet power. Deep woods and herbal notes evoke the scent of earth after rain—calm, grounded, and refined. For the man who commands attention without effort, Terra embodies the beauty of balance."
                    features={[
                        { icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"></path><path d="M12 22v-3"></path></svg>, text: 'Woody & Herbal' },
                        { icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg>, text: 'Grounded & Sophisticated' }
                    ]}
                    discoverUrl="/fragrance/aqua"
                    addToBagUrl="#"
                />
            </div>
            <div className="col-12 mt-5">
                <ProductCard
                    image="/images/aqua-ad.png"
                    title="Aqua"
                    subtitle="Eau de Parfum"
                    description="Cool and invigorating, Aqua channels the untamed spirit of the ocean. Crisp aquatic notes flow over mineral woods, capturing the mystery of open water. As refreshing as a sea breeze yet as commanding as the tide, Aqua is for the man who moves with quiet strength."
                    features={[
                        { icon: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>, text: 'Fresh & Aquatic' },
                        { icon: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>, text: 'Refreshing & Invigorating' }
                    ]}
                    discoverUrl="/fragrance/aqua"
                    addToBagUrl="#"
                />
            </div>
            <div className="col-12 mt-5">
                <ProductCard
                    image="/images/ignis-ad.png"
                    title="Ignis"
                    subtitle="Eau de Parfum"
                    description="Forged in fire, Ignis is a bold statement of power and poise. Smoldering spices and rich woods create an intense, magnetic presence. For the man whose quiet confidence speaks volumes, this fragrance captures fire’s raw allure—uncompromising and unforgettable."
                    features={[
                        { icon: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>, text: 'Spicy & Smoky' },
                        { icon: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>, text: 'Bold & Seductive' }
                    ]}
                    discoverUrl="/fragrance/noir"
                    addToBagUrl="#"
                />
            </div>
        </div>
    </section>
);

export default ProductsSec;
