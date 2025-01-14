import {Button, Tooltip} from "@nextui-org/react";
import {FaGithub} from "react-icons/fa";
import ht from "../assets/img_2.png"
import {RiHtml5Fill, RiJavascriptFill, RiTailwindCssFill} from "react-icons/ri";



export default  function ToDolistCard () {

    return (

        <div className="card bg-base-100  w-96 shadow-xl dark:shadow-white dark:shadow-md">
            <figure>
                <img
                    src={ht}
                    alt="Health Tracker"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-slate-950">
                    To do list!
                </h2>
                <p className="text-slate-950">A basic todo list, with vanila JS, CSS and HTML5</p>
                <div className="card-actions justify-end">
                    <Tooltip size="lg" content="JavaScript" color="foreground">
                        <div className="badge badge-outline transition hover:scale-150 ease-in-out dark:bg-slate-700">
                            <RiJavascriptFill/></div>
                    </Tooltip>
                    <Tooltip size="lg" content="HTML5" color="foreground">
                        <div className="badge badge-outline transition hover:scale-150 ease-in-out dark:bg-slate-700"><RiHtml5Fill/></div>
                    </Tooltip>
                    <Tooltip size="lg" content="Tailwind CSS" color="foreground">
                    <div className="badge badge-outline transition hover:scale-150 ease-in-out dark:bg-slate-700"><RiTailwindCssFill/></div>
                    </Tooltip>
                </div>
                <div className="card-actions mt-4">
                    <a><Button size="lg" variant="solid" color="primary" className=" transition hover:scale-110 ease-in-out"><FaGithub/> Get Github</Button></a>
                </div>
            </div>
        </div>
    )
}