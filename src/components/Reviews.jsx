import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img from "../assets/img/reviews.jpg"
import img_reviewer1 from "../assets/img/contributor1.jpg"
import img_reviewer2 from "../assets/img/contributor2.jpg"
import review from "../assets/icons/reviews.svg"
import '../assets/css/index.css'

export default function Reviews() {

    return (
        <div className='container mx-auto md:p-10 px-4 py-6' id='reviews'>
            <div className="hero max-h-screen rounded-box"
                style={{backgroundImage: `url( ${img} )`}}>
                <div class="hero-overlay bg-opacity-60 rounded-box"></div>
                <div className='hero-content text-center text-white w-full overflow-hidden'>
                    <div className="max-w-xl"> 
                        <img src={review} width={50} className='pt-10 mx-auto' />
                        <h2 className="text-3xl font-bold">Avis Clients</h2>
                        <div className="pt-10">
                        <Swiper
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='flex-col gap-4 items-center justify-center'>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-yellow-400"
                                        />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                </div>
                                <p className='py-3 w-1/2 sm:w-2/3  mx-auto'>
                                    Dirigo a transformé notre stratégie digitale. Les résultats ont dépassé nos attentes !
                                </p>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={img_reviewer2} />
                                    </div>
                                </div>
                                <p className='mb-10'>Sophie L., Directrice marketing</p>
                            </SwiperSlide>
                            <SwiperSlide className='flex-col gap-4 items-center justify-center'>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-yellow-400 "
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                </div>
                                <p className='py-3 w-1/2 sm:w-2/3 mx-auto'>
                                    Grâce à Dirigo, nos ventes en ligne ont doublé en 6 mois.
                                </p>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={img_reviewer2} />
                                    </div>
                                </div>
                                <p className='mb-10'>Karim T., Fondateur d’e-commerce</p>
                            </SwiperSlide>
                            <SwiperSlide className='flex-col gap-4 items-center justify-center'>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-yellow-400"
                                        />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400"  />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                                </div>
                                <p className='py-3 w-1/2 sm:w-2/3 mx-auto'>
                                    Professionnalisme, écoute et résultats : une agence exceptionnelle.
                                </p>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={img_reviewer1} />
                                    </div>
                                </div>
                                <p className='mb-10'>Julie D., Responsable communication</p>
                            </SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}