import ritImage from "../assets/mainblock.jpg"
import setuIng from "../assets/setu.jpg"
export default function EducationGrid (){


    return(

        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-20">

            <div id="ritImg" className="">
                <img alt="ritImage" className="h-full w-full rounded-lg" src={ritImage}/>
            </div>
            <div className="flex flex-col justify-start items-start space-y-4">
                <h1 className="text-3xl text-slate-700 dark:text-slate-200">Govt Rajiv Gandhi Institute of
                    Technology</h1>
                <h3 className="text-xl text-slate-400">Kottayam</h3>
                <h3 className="text-2xl text-slate-700 dark:text-slate-200">B.Tech, Computer Science and Engg.</h3>
                <h3 className="text-lg text-slate-400">2015-2019</h3>

            </div>
            <div className="flex flex-col justify-start items-start space-y-4">
                <h1 className="text-3xl text-slate-700 dark:text-slate-200">South East Technological University</h1>
                <h3 className="text-xl text-slate-400">Waterford</h3>
                <h3 className="text-2xl text-slate-700 dark:text-slate-200">Msc in Computing</h3>
                <h3 className="text-lg text-slate-400">2024-2025</h3>

            </div>
            <div id="ritImg" className="">
                <img alt="ritImage" className="h-full w-full rounded-lg" src={setuIng}/>
            </div>

        </section>
    )


}