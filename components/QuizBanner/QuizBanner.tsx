import React from 'react';
import styles from './QuizBanner.module.scss';


const QuizBanner: React.FC = () => (

    <section className={`${styles.bannerSection}`}>
        <p>Fragrance Quiz</p>
        <h2>The Cote Royale Fragrance Finder</h2>
        <p className='py-5'>Find your perfect scent with our personalized quiz.</p>
        <a className='btn btn-default' href="#">Take the Quiz</a>
    </section>
)

export default QuizBanner;
