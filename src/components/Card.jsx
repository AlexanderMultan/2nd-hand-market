import React from 'react';

const Card = (props) => {
    const {
        src,
        alt,
        value,
        price,
    } = props;

    return (
        <div className="card">
            <img
                className="card__image"
                src={src}
                height="270"
                width="240"
                alt={alt}
            />
            <div className="card__info">
                <div className="card__title">
                    {value}
                </div>
                <div className="card__price">{price} €</div>
            </div>
        </div>
    );
};

export default Card;