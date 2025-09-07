import React from 'react';
import styles from './TextSection.module.scss';


interface TextSectionProps {
    smallHeading?: string;
    mainHeading?: string;
    para?: string;
}

const TextSection: React.FC<TextSectionProps> = ({
    smallHeading,
    mainHeading,
    para
}) => {
    // If no props, render default content for direct use
    if (!smallHeading && !mainHeading && !para) {
        return (
            <section className={styles.textSection}>
                <p>Defining Luxury</p>
                <h2>Côte Royale is designed for the man who commands attention without seeking it</h2>
            </section>
        );
    }
    return (
        <section className={styles.textSection}>
            {smallHeading && <p>{smallHeading}</p>}
            {mainHeading && <h2>{mainHeading}</h2>}
            {para && <span>{para}</span>}
        </section>
    );
};

export default TextSection;
