import x from "../assets/icons/x.svg"
import instagram from "../assets/icons/instagram.svg"
import facebook from "../assets/icons/facebook.svg"
import tiktok from "../assets/icons/tiktok.svg"
import logo from "../assets/img/empty-logo.png"
import '../assets/css/index.css'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <>
            <footer className="footer bg-primary text-white md:px-10 p-4">
                <nav>
                    <h3 className="font-bold text-lg">Liens Rapides</h3>
                    <a className="link link-hover" href="#">Accueil</a>
                    <a className="link link-hover" href="about">A Propos</a>
                    <a className="link link-hover" href="service">Services</a>
                    <a className="link link-hover" href="contact">Contact</a>
                </nav>
                <nav>
                    <h3 className="font-bold text-lg">Liens utiles</h3>
                    <a className="link link-hover" href="#reviews">Avis clients</a>
                    <a className="link link-hover" href="faq">FAQs</a>
                    <a className="link link-hover">Prendre un rendez-vous</a>
                </nav>
                <nav>
                    <h3 className="font-bold text-lg">Pages légales</h3>
                    <a className="link link-hover">Conditions générales d'utilisation</a>
                    <a className="link link-hover">Politique de confidentialité</a>
                    <a className="link link-hover">Mentions légales</a>
                </nav>
                </footer>
                <footer className="footer bg-primary text-white border-base-300 border-t md:px-10 p-4">
                <aside className="grid-flow-col items-center">
                    <img src={logo} className="w-10 rounded" alt="" />
                    <p>
                    Dirigo - Agence de Marketing Digital
                    <br />                    
                    Copyright © {year} - Tous droits reservés !
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                    <a href="#">
                        <img src={x} className="w-7" alt="" />
                    </a>
                    <a href="#">
                        <img src={instagram} className="w-7" alt="" />
                    </a>
                    <a href="#">
                        <img src={facebook} className="w-7" alt="" />
                    </a>
                    <a href="#">
                        <img src={tiktok} className="w-7" alt="" />
                    </a>
                    </div>
                </nav>
            </footer>
        </>
    )
}