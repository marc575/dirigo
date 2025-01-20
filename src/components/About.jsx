import team from '../assets/img/team.png'
import strategie from '../assets/img/coworking.png'
import experience from '../assets/img/networking.png'
import img from '../assets/img/about.jpg'
import '../assets/css/index.css'

export default function About() {

    return (
        <div className="container mx-auto md:p-10 px-4 py-6" id='about'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <div>
                    <h2 className="text-3xl font-bold">Pourquoi choisir Dirigo ?</h2>
                    <p className="pt-6">
                        Chez Dirigo, nous croyons en la puissance d'une stratégie bien exécutée. Avec une équipe d'experts en marketing digital, nous aidons les marques à captiver, convertir et fidéliser leur audience. Nos solutions personnalisées et axées sur les résultats garantissent que chaque investissement compte.
                    </p>
                    <div className="card card-side bg-base-100">
                        <figure>
                            <img src={experience} alt="" className='w-12' />
                        </figure>
                        <div className="card-body pb-0">
                            <h6 className="card-title">+10 ans d'expérience dans le marketing digital</h6>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100">
                        <figure>
                            <img src={strategie} alt="" className='w-12' />
                        </figure>
                        <div className="card-body pb-0">
                            <h6 className="card-title">Stratégies 100 % personnalisées</h6>
                        </div>
                    </div>
                    <div className="card card-side bg-base-100">
                        <figure>
                            <img src={team} alt="" className='w-12' />
                        </figure>
                        <div className="card-body pb-0">
                            <h6 className="card-title">Accompagnement humain et technique complet</h6>
                        </div>
                    </div>
                </div>
                <img src={img} alt="" className='rounded pt-10 pt-md-0' />
            </div>
        </div>
    )
}