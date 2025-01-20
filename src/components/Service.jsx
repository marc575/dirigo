import site from '../assets/img/coworking.png'
import reseau from '../assets/img/digital-campaign.png'
import email from '../assets/img/email.png'
import publicite from '../assets/img/social-media-management.png'
import seo from '../assets/img/promotion.png'
import analyse from '../assets/img/networking.png'
import arrow_right from "../assets/icons/arrow-right.svg"
import '../assets/css/index.css'

export default function Service() {

    return (
        <div className="container mx-auto md:p-10 px-4 py-6" id='service'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center pb-5">
                <div>
                    <h2 className="text-3xl font-bold">Nos services pour booster votre croissance</h2>
                    <p className="py-3 text-sm">
                        Nous couvrons tous les aspects du marketing digital pour répondre à vos besoins spécifiques.
                    </p>
                </div>
                <div className="text-right">
                    <a href="#" className="btn btn-slate-200 rounded-full">Découvrez nos solutions <img src={arrow_right} width={12} alt="arrow" /></a>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="card bg-slate-100">
                    <div className="card-body">
                        <img src={reseau} alt="" width="30" />
                        <h2 className="card-title">Gestion des réseaux sociaux</h2>
                        <p>Augmentez votre visibilité et engagez votre audience avec des stratégies social media efficaces.</p>
                    </div>
                </div>
                <div className="card bg-slate-100">
                    <div className="card-body">
                        <img src={seo} alt="" width="30" />
                        <h2 className="card-title">SEO & Content Marketing</h2>
                        <p>Attirez du trafic qualifié grâce à des contenus optimisés pour le référencement.</p>
                    </div>
                </div>
                <div className="card bg-primary text-white">
                    <div className="card-body">
                        <img src={publicite} alt="" width="30" />
                        <h2 className="card-title">Publicité digitale (PPC)</h2>
                        <p>Maximisez votre ROI avec des campagnes publicitaires ciblées.</p>
                    </div>
                </div>
                <div className="card bg-slate-100">
                    <div className="card-body">
                        <img src={email} alt="" width="30" />
                        <h2 className="card-title">E-mail Marketing</h2>
                        <p>Fidélisez vos clients avec des campagnes d’e-mailing impactantes.</p>
                    </div>
                </div>
                <div className="card bg-slate-100">
                    <div className="card-body">
                        <img src={site} alt="" width="30" />
                        <h2 className="card-title">Création de sites web</h2>
                        <p>Concevez une présence en ligne professionnelle et performante.</p>
                    </div>
                </div>
                <div className="card bg-slate-100">
                    <div className="card-body">
                        <img src={analyse} alt="" width="30" />
                        <h2 className="card-title">Analyse & Reporting</h2>
                        <p>Suivez vos performances grâce à des rapports détaillés et des insights exploitables.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}