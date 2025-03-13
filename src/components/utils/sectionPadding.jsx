import style from './sectionPadding.module.css'

const SectionPadding = ({children}) => {
    return (
        <section className={style.sectionPadding}>
            {children}
        </section>
    )
}

export default SectionPadding;