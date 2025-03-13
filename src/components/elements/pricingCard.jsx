import style from './pricingCard.module.css';
import React from "react";
import checkMark from '../../assets/checkmark.svg';

const PricingCard = ({tier = "", price = "", text = "", features = [""], special = false}) => {
    return (
        <div className={special ? `${style.pricingCard} ${style.special}` : `${style.pricingCard}`}>
            {special && <div className={style.ad}>Recomended</div>}
            <h4>{tier}</h4>
            <div className={style.cardPrice}>
                <span className={style.price}>${price}
                </span>
                <span>&nbsp; per month</span>
            </div>
            <a className={style.btn}>Create Account</a>
            <p>{text}</p>
            <div className={style.featureList}>
                {features && features.map((feature, index) => (
                    <div>
                        <img className={style.checkMark} src={checkMark} alt="checkmark"/>
                        <p key={index}>{feature}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PricingCard;