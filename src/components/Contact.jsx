import address from '../assets/icons/address.svg'
import phone from '../assets/icons/phone.svg'
import email from '../assets/icons/email.svg'
import '../assets/css/index.css'

export default function Contact() {

    return (
        <div className='container mx-auto md:p-10 px-4 py-6'>
            <div className="hero bg-white max-h-screen" id='contact'>
                <div className="hero-content flex-col lg:flex-row gap-0 sm:gap-10">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold">Parlez-nous de votre projet</h2>
                        <p className="py-3 text-md">
                            Notre équipe est prête à vous aider à atteindre vos objectifs. Envoyez-nous un message et nous vous recontacterons dans les plus brefs delais.
                        </p>
                    </div>
                    <div className="w-full shadow-2xl p-5 rounded">
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Nom complet</span>
                                </label>
                                <input name="name" id="name" type="text" placeholder="Nom complet" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" id="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name="message" id="message" rows="5" placeholder='Message' className="textarea textarea-bordered" required></textarea>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Envoyez votre demande</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}