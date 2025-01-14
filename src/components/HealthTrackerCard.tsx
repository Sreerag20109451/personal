import {Button, Tooltip} from "@nextui-org/react";
import {FaGithub} from "react-icons/fa";
import {IoIosLink} from "react-icons/io";
import ht from "../assets/img.png"
import {SiKotlin, SiPostgresql, SiTypescript} from "react-icons/si";
import {RiVuejsFill} from "react-icons/ri";



export default  function HealthTrackerCard () {

    return (

        <div className="card bg-base-100 h-1/2 w-96 shadow-xl dark:shadow-white dark:shadow-md">
            <figure>
                <img
                    src={ht}
                    alt="Health Tracker"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-slate-950">
                    Health Tracker!
                    <div className="badge badge-secondary">new</div>
                </h2>
                <p className="text-slate-950">A health tracker application, that can be used to track health, activities and generate Report</p>
                <div className="card-actions justify-end">
                    <Tooltip size="lg" content="Kotlin" color="foreground">
                        <div className="badge badge-outline transition hover:scale-150 ease-in-out dark:bg-slate-700">
                            <SiKotlin/></div>
                    </Tooltip>
                    <Tooltip size="lg" content="VueJS" color="foreground">
                    <div className="badge badge-outline transition hover:scale-150 ease-in-out dark:bg-slate-700"><RiVuejsFill/></div>
                    </Tooltip>
                        <Tooltip size="lg" content="TypeScript" color="foreground">
                    <div className="badge badge-outline transition hover:scale-150 ease-in-out dark:bg-slate-700"><SiTypescript/></div>
                        </Tooltip>
                    <Tooltip size="lg" content="PostgreSQL" color="foreground">
                        <div className="badge badge-outline transition hover:scale-150 ease-in-out dark:bg-slate-700"><SiPostgresql/></div>
                    </Tooltip>
                </div>
                <div className="card-actions mt-4">
                <a><Button size="lg" variant="solid" color="primary" className=" transition hover:scale-110 ease-in-out"><FaGithub/> Get Github</Button></a>
                    <a><Button size="lg" variant="solid" color="primary"  className=" transition hover:scale-110 ease-in-out" ><IoIosLink/> Get Web</Button></a>
                </div>
            </div>
        </div>
    )
}