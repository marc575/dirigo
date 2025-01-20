import hero_img from "../assets/img/hero.jpg"
import arrow_right from "../assets/icons/arrow-right.svg"
import '../assets/css/index.css'

export default function Hero() {

    return (
        <>
            <div className="hero min-h-screen"
                style={{backgroundImage: `url( ${hero_img} )`}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-white text-center items-center justify-center flex-col lg:flex-row-reverse">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold">Dirigez votre succès digital avec Dirigo</h1>
                        <p className="py-6 text-sm">
                            Propulsez votre marque grâce à des stratégies de marketing digital sur mesure et des résultats mesurables. Notre expertise vous aidera à atteindre vos objectifs commerciaux et de croissance. 
                        </p>
                        <div className="flex gap-4 items-center justify-center">
                            <a className="btn btn-primary">Commencez maintenant <img src={arrow_right} width={12} alt="arrow" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}