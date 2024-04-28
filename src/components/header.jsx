'use client'
import Spline from '@splinetool/react-spline';
import style from '../scss/header.module.scss';



export default function Header() {


    return (
        <div>
            <div className={style.mouseIcon}>
                <div className={style.scrollWheel}></div>
            </div>
            <div className={style.title}>
                <div
                    className="absolute inset-x-0 transform-gpu overflow-hidden blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-5rem)] top-[40%]  aspect-[1155/678] w-[9rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e8468a] to-[#89a4fc] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                    <div
                        className="relative left-[calc(50%-11rem)] top-[40%] aspect-[1155/678] w-[6rem] rotate-[30deg] bg-gradient-to-tr from-[#e8468a] to-[#89a4fc] opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <h1 className='select-none'>Welcome to my new portfolio</h1>
                <a href="#" className='absolute mt-6 py-2 px-6 rounded-3xl bg-black text-white text-lg cursor-pointer z-20 border-2 border-black hover:bg-transparent hover:text-black'><button className=''>see more</button></a>


            </div>



            <Spline scene="https://draft.spline.design/O0aokKzt-d4PqSpZ/scene.splinecode" />
        </div>
    );
}