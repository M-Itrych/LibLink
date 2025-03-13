import style from './footer.module.css'

const FooterComp = () => {
    return (
        <section className={style.footerContainer}>
            <div className={style.line}>
            </div>
            <div className={style.footerContent}>
                <p>© {new Date().getFullYear()} LibLink. All rights reserved. Unauthorized use or reproduction is
                    prohibited.</p>
            </div>
        </section>
    )
}

export default FooterComp;