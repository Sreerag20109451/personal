export default  function ExperiencesTimeLine(){

    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li className="-translate-x-full opacity-0 animate-left">
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clip-rule="evenodd"/>
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">2020 Sep -Dec</time>
                    <div className="text-2xl text-slate-950 dark:text-slate-50 font-bold">Operations Intern</div>
                    <div className="text-xl italic">Katha</div>
                    <div className="text-lg text-slate-500">Kanhangad</div>
                    Contributed to the community outreach campaign,
                    created content for Katha's mobile news app, facilitated daily communications with society leaders,
                    and ensured strict adherence to company policies with meticulous attention to detail.
                </div>
                <hr/>
            </li>
            <li className="translate-x-full opacity-0 animate-right">
            <hr/>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clip-rule="evenodd"/>
                    </svg>
                </div>
                <div className="timeline-end md:mb-10">
                    <time className="font-mono italic">2021 April - 2023 March</time>
                    <div className="text-2xl text-slate-950 dark:text-slate-50 font-bold">Assistant System Engineer</div>
                    <div className="text-xl italic">TCS</div>
                    <div className="text-lg text-slate-500">Chennai</div>
                    Designed test cases, executed tests, documented test artifacts,
                    and regularly collaborated with both internal and international team members to ensure project success.
                </div>
                <hr/>
            </li>
            <li className="-translate-y-full opacity-0 animate-left">
                <hr/>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clip-rule="evenodd"/>
                    </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">2023 April - 2024 March</time>
                    <div className="text-2xl text-slate-950 dark:text-slate-50 font-bold">System Engineer</div>
                    <div className="text-xl italic">TCS</div>
                    <div className="text-lg text-slate-500">Chennai</div>
                    Developed natural language prompts for JavaScript/TypeScript code generation
                    in a Generative AI training model and performed code reviews to ensure quality and efficiency.
                </div>
                <hr/>
            </li>
            <li className="-translate-y-full opacity-0 animate-right">
                <hr/>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clip-rule="evenodd"/>
                    </svg>
                </div>
                <div className="timeline-end md:mb-10">
                    <time className="font-mono italic">2024 Sep - 2024 Nov</time>
                    <div className="text-2xl text-slate-950 dark:text-slate-50 font-bold">Retail Assistant
                    </div>
                    <div className="text-xl italic">The Range</div>
                    <div className="text-lg text-slate-500">Waterford</div>
                    Implemented efficient stocking strategies to enhance customer interaction and optimize pricing, ensuring timely product availability and competitive market positioning.
                    mouse.
                </div>
                <hr/>
            </li>
        </ul>
    )


}