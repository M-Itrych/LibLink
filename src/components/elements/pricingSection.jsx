import style from './pricingSection.module.css';
import React, {useState} from 'react';
import SectionPadding from "../utils/sectionPadding";
import PricingCards from "./pricingCard";


const PricingSection = () => {
    const [selected, setSelected] = useState("users");
    return (
        <div className={style.pricingContainer}>
            <SectionPadding>
                <div className={style.pricingContainer} id="pricingSection">
                    <div className={style.pricingButton}>
                        <p
                            className={selected === "users" ? `${style.btnActive} ${style.btn}` : `${style.btn}`}
                            onClick={() => setSelected("users")}>Users
                        </p>
                        <p
                            className={selected === "libraries" ? `${style.btnActive} ${style.btn}` : `${style.btn}`}
                            onClick={() => setSelected("libraries")}>Libraries
                        </p>
                    </div>

                    <div className={style.parentContainer}>
                        <div
                            className={selected === "libraries" ? `${style.pricingCards} ${style.hidden}` : `${style.pricingCards} ${style.visible}`}>
                            <PricingCards price="0" tier="Free" text=" Free Plan For Users"
                                          features={["Search & browse library catalogs", "Reserve & request books", "Get notifications for due dates and holds", "Access digital resources "]}/>
                            <PricingCards price="9.9" tier="Free+" text="Free Plan (with better Prices)"
                                          special={true}
                                          features={["Search & browse library catalogs", "Reserve & request books", "Get notifications for due dates and holds", "Access digital resources ", "15% discount on every Book"]}/>
                        </div>

                        <div
                            className={selected === "users" ? `${style.pricingCards} ${style.hidden}` : `${style.pricingCards} ${style.visible}`}>
                            <PricingCards price="0" tier="Free" text=" Free Plan For Libraries"
                                          features={["Up to 50 unique books in the catalog", "Basic book lending & tracking", "Standard reports & analytics", "Email-based support (response within 72 hours)"]}/>
                            <PricingCards price="100" tier="Pro" text="Free Plan (with more Features)"
                                          features={["Up to 500 unique books in the catalog", "Basic book lending & tracking", "Basic analytics & reporting", "Customer support (response within 48 hours)"]}/>
                            <PricingCards price="500" tier="Expert" text="Pro Plan (with more Features)"
                                          special={true}
                                          features={["Up to 5000 unique books in the catalog", "Advanced book lending & tracking", "Advanced analytics & reporting", "Priority customer support (response within 24 hours)"]}/>
                            <PricingCards price="999" tier="Master" text="Expert Plan (with more Features)"
                                          features={["Unlimited book catalog", "Advanced+ book lending & tracking", "Advanced+ analytics & reporting", "Priority+ customer support (response within 12 hours)"]}/>
                        </div>
                    </div>
                </div>
            </SectionPadding>
        </div>
    )
}

export default PricingSection;