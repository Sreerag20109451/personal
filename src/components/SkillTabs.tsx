import React from "react";
import {Tabs, Tab, Card, CardBody, Switch} from "@nextui-org/react";
import {
    SiCypress,
    SiExpress, SiGoogleearthengine,
    SiJavascript, SiJest, SiJunit5,
    SiKotlin,
    SiNextdotjs, SiPostgresql, SiPostman,
    SiReact, SiSelenium, SiTableau,
    SiTypescript,
    SiVuedotjs
} from "react-icons/si";
import {FaJava, FaPython} from "react-icons/fa";
import {TbApi} from "react-icons/tb";

export default function SkillTabs() {
    const [isVertical, setIsVertical] = React.useState(false);

    return (
        <div className="flex flex-col px-4">
            <Switch className="mb-4" isSelected={isVertical} onValueChange={setIsVertical}>
                Vertical
            </Switch>
            <div className="flex w-full flex-col">
                <Tabs aria-label="Options" isVertical={isVertical}>
                    <Tab key="dev" title=" Programming Languages">
                        <Card>
                            <CardBody>
                                <div className="flex flex-row gap-x-4">
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiJavascript size="45"/>
                                        <p>JavaScript</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiTypescript size="45"/>
                                        <p>TypeScript</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiKotlin size="45"/>
                                        <p>Kotlin</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <FaJava size="45"/>
                                        <p>Java</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <FaPython size="45"/>
                                        <p>Python</p>
                                    </div>
                                </div>

                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="music" title="Development Frameworks">
                        <Card>
                            <CardBody>
                                <div className="flex flex-row gap-x-4">
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiKotlin size="45"/>
                                        <p>Javalin</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiVuedotjs size="45"/>
                                        <p>VueJS</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiReact size="45"/>
                                        <p>ReactJS</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiExpress size="45"/>
                                        <p>ExpressJS</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiNextdotjs size="45"/>
                                        <p>NextJS</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiPostgresql size="45"/>
                                        <p>SQL & PostgreSQL</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="Testing" title="Testing Frameworks">
                        <Card>
                            <CardBody>
                                <div className="flex flex-row gap-x-4">
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiCypress size="45"/>
                                        <p>Cypress</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiJest size="45"/>
                                        <p>Jest</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiJunit5 size="45"/>
                                        <p>Junit</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <TbApi size="45"/>
                                        <p>Unirest</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiPostman size="45"/>
                                        <p>Postman</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiSelenium size="45"/>
                                        <p>Selenium</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="others" title="Misceallaneous">
                        <Card>
                            <CardBody>
                                <div className="flex flex-row gap-x-4">
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiTableau size="45"/>
                                        <p>Tableau</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-2">
                                        <SiGoogleearthengine size="45"/>
                                        <p>Google Earth Engine</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

