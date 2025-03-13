import SectionPadding from "../components/utils/sectionPadding";
import style from "./homePage.module.css";
import AnimatedText from "../components/decorations/animatedText";
import AnimatedCanvas from "../components/decorations/animatedCanvas";
import NavBar from "../components/navUtils/navBar";
import PricingSection from "../components/elements/pricingSection";
import IntroSection from "../components/elements/introSection";
import SectionSpacing from "../components/utils/sectionSpacing";
import FooterComp from "../components/navUtils/footer";

const HomePage = () => {
    return (
        <>
            <NavBar/>
            <div>
                <SectionPadding style={{position: "relative"}}>
                    <section className={style.section}>
                        <a className={style.welcomeAnnouncement} href="/">
                            <p>LibLink v1.0 is out!</p>
                        </a>
                        <div>
                            <AnimatedText customClass={style.title}/>
                            <span className={style.title}> Library Management</span>
                            <div>
                                <p>Simplify library management and organize resources seamlessly across platforms.</p>
                            </div>
                        </div>
                        <div className={style.btnContainer}>
                            <a href="/" className={`${style.btn} ${style.btnImportant}`}>Start Now</a>
                            <a href={"#introSection"} className={`${style.btn} `}>Introduction</a>
                        </div>

                    </section>
                </SectionPadding>
                <IntroSection/>
                <SectionSpacing/>
                <AnimatedCanvas/>
            </div>
            <PricingSection/>
            <SectionSpacing/>
            <FooterComp/>
        </>
    )
}

export default HomePage;