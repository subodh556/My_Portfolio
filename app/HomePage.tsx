'use client';
import { data } from "@/types/main";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Socials from "@/components/Socials";

import Contact from "@/components/Contact";

import Header from "./Header";


interface Props {
    data: data,
}

const HomePage = ({ data }: Props) => {
    return (
        <>
            <Header logo={data.main.name} />
            <Hero />
            <Socials socials={data.socials} />
            <About aboutData={data.about} name={data.main.name} />
            <Skills skillData={data.skills} />
            <Projects projectsData={data.projects} />
            <Contact />
        </>
    )
}

export default HomePage