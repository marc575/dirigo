import img from "../assets/img/newsletter.jpg"
import '../assets/css/index.css'

export default function Newsletter() {

    return (
        <div className="container mx-auto mt-20 sm:mt-0 md:p-10 p-2">
            <div className="hero max-h-screen rounded-box"
                style={{backgroundImage: `url( ${img} )`}}>
                <div class="hero-overlay bg-opacity-60 rounded-box"></div>
                <div className="hero-content text-white text-center items-center justify-center flex-col lg:flex-row-reverse">
                    <div className="max-w-xl py-20">
                        <h2 className="text-xl font-bold">Restez informé des dernières tendances digitales</h2>
                        <p className="py-3 text-sm">
                            Inscrivez-vous à notre newsletter pour recevoir des conseils exclusifs et des actualités sur le marketing digital.
                        </p>
                        <div className="flex gap-0 items-center justify-between p-0 input input-bordered rounded-full bg-white">
                            <label className="flex items-center gap-2 px-5 grow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4">
                                    <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Email" />
                            </label>
                            <div className="form-control grow">
                                <button className="btn btn-primary p-0 rounded-full grow">Je m'inscris</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}