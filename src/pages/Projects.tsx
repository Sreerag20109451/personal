import HealthTrackerCard from "../components/HealthTrackerCard.tsx";
import ToDolistCard from "../components/ToDolistCard.tsx";


export default  function Projects(){

    return(
    <section className=" w-full h-full  flex md:flex-row flex-col space-y-4 md:justify-between md:items-center space md:mb-12 opacity-0 translate-y-10 animate-load ">
        <HealthTrackerCard/>
        <ToDolistCard/>
    </section>
)
}