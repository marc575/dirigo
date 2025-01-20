import logo from "../assets/img/empty-logo.png"
import arrow_right from "../assets/icons/arrow-right.svg"
import '../assets/css/index.css'

export default function Navbar() {

    return (
    <>
        <div className="navbar bg-primary z-10 fixed top-0 px-10 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content text-dark bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a href="#" className="font-bold">Accueil</a></li>
                    <li><a href="#about" className="font-bold">A Propos</a></li>
                    <li><a href="#service" className="font-bold">Services</a></li>
                    <li><a href="#reviews" className="font-bold">Avis</a></li>
                    <li><a href="#faq" className="font-bold">FAQs</a></li>
                    <li><a href="#contact" className="font-bold">Contact</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src={logo} className="w-12 rounded" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><a href="#" className="font-bold">Accueil</a></li>
                    <li><a href="#about" className="font-bold">A Propos</a></li>
                    <li><a href="#service" className="font-bold">Services</a></li>
                    <li><a href="#reviews" className="font-bold">Avis</a></li>
                    <li><a href="#faq" className="font-bold">FAQs</a></li>
                    <li><a href="#contact" className="font-bold">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn btn-outline-primary font-bold">Rendez-vous <img src={arrow_right} width={12} alt="arrow" /></a>
            </div>
        </div>
    </>
)
}
    