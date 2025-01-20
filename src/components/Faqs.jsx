import img from '../assets/img/faq.png'
import '../assets/css/index.css'

export default function Faqs() {

    return (
        <div className="container md:p-10 px-4 py-6 mx-auto" id='faq'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <div>
                    <h2 className="text-3xl font-bold pt-3 pb-10">FAQs</h2>
                    <img src={img} alt="" className='rounded' />
                </div>
                <div>
                    <div className="collapse collapse-plus bg-primary my-2">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-md text-white font-medium">Quels types d'entreprises accompagnez-vous ?</div>
                        <div className="collapse-content bg-white">
                            <p>Nous travaillons avec des entreprises de toutes tailles, des startups aux grandes entreprises.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-primary my-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-md text-white font-medium">Quels résultats puis-je espérer ?</div>
                        <div className="collapse-content bg-white">
                            <p>Nos stratégies sont conçues pour générer un trafic qualifié, améliorer votre notoriété et augmenter vos conversions.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-primary my-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-md text-white font-medium">Quels sont vos délais pour voir des résultats ?</div>
                        <div className="collapse-content bg-white">
                            <p>Cela dépend du service choisi. En SEO, les résultats prennent généralement 3 à 6 mois, tandis qu’en publicité, les premiers résultats sont immédiats.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}