import {Divider} from "@nextui-org/react";
import SkillTabs from "./SkillTabs.tsx";
import LanguageTable from "./LanguageTable.tsx";
export default function AboutGrid() {
    return (

        <section className="flex flex-col justify-center items-center">
            <section id="skills" className="flex flex-col justify-start items-start">
                <h1 className="text-slate-700 text-5xl">Technical Skills</h1>
                <Divider className="my-4"/>
                <SkillTabs/>
                <h1 className="text-slate-700 text-5xl mt-8">Languages</h1>
                <Divider className="my-4"/>
                <LanguageTable/>


            </section>

        </section>
    );
}
