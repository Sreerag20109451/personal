import {Button} from "@nextui-org/react";
import {FaGithub} from "react-icons/fa";

interface  ProjectProps  {

    name: string,
    url: string | null
    description : string
    imageUrl : string

}

export default  function ProjectCards ({name,url,description,imageUrl}:ProjectProps){

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl"/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                {imageUrl != null && <p>{url}</p>}
                <p>{description}</p>
                <div className="card-actions">
                    <Button size="lg" variant="solid"><FaGithub/> Check in git hub</Button>
                </div>
            </div>
        </div>
    )
]