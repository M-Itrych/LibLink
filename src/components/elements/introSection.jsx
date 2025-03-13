import SectionPadding from "../utils/sectionPadding";
import style from './introSection.module.css'
import IntroCard from "./introCard";


const IntroSection = () => {
    return (
        <SectionPadding>
            <div className={style.introSection} id="introSection">
                <IntroCard number="1" title="Sign Up & Connect"
                           text="Create an account and link it to your local library to access its full catalog.">

                    <a href="/" className={style.loginBtn}>Start Now</a>
                </IntroCard>
                <IntroCard number="2" title="Search Your Library’s Collection"
                           text="Browse by title, author, genre, or format to find the perfect book."/>
                <IntroCard number="3" title="Check Availability & Request"
                           text="See if the book is in stock and request it for pickup at your library."/>
                <IntroCard number="4" title="Reserve or Join a Waitlist"
                           text="If the book is checked out, place a reservation and get notified when it’s available."/>
                <IntroCard number="5" title="Borrow & Pick Up"
                           text="Head to your library to pick up your requested books at your convenience."/>
                <IntroCard number="6" title="Track Due Dates & Renew"
                           text="Get reminders for return deadlines and extend loans if needed."/>
                <IntroCard number="7" title="Return & Explore More"
                           text="Drop off your book at the library and get personalized recommendations for your next read."/>
            </div>
        </SectionPadding>
    )
}

export default IntroSection;