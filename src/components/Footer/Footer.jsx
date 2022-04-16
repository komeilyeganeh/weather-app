import classes from "./Footer.module.css";

const Footer = () => {
    return <footer className={classes.footer}>
        <p className={classes.detail}>Designed by <a href="https://komeilyeganeh.ir" target="_blank" className={classes.designer}>Komeil Yeganeh</a></p>
    </footer>
}

export default Footer;