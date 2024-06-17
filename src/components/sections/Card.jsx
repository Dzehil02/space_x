import React from 'react';

const Card = ({ title, subtitle, subtitleSpan, linkText, isBig, bgClass }) => {
    return (
        <article className={`offers__block-text block-text ${bgClass} ${isBig ? 'block-text--big' : ''}`}>
            <h2 className={`block-text__title ${isBig ? 'block-text__title--big' : 'block-text__title--small'}`}>{title}</h2>
            <p className={`block-text__subtitle ${isBig ? 'block-text__subtitle--big' : ''}`}>
                {subtitle} {subtitleSpan && <span className="block-text__subtitle--space">{subtitleSpan}</span>}
            </p>
            <a href="./" className="block-text__button button button--outline">
                {linkText}
            </a>
        </article>
    );
};

export default Card;
