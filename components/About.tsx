import Image from "next/image"
import { about } from "@/types/main";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import { BiLinkExternal } from "react-icons/bi";

interface Props {
    aboutData: about,
    name: string
}

const About = ({ aboutData, name }: Props) => {

    const { aboutImage, aboutImageCaption, title, about, aboutt, resumeUrl, callUrl } = aboutData

    return (
        <SectionWrapper id="about" className="min-h-[90vh] pt-12 bg-gradient-to-b from-white to-gray-100/20 dark:from-grey-900 dark:to-grey-900">
            <h2 className="text-4xl text-center">About Me</h2>

            <div className="w-full lg:w-11/12 2xl:w-4/5 mt-5 lg:mt-30 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center">
                <div className=" mt-10 w-56 self-start md:w-2/5 lg:w-72 bg-white dark:bg-grey-800 flex flex-col gap-2 items-center rounded-full mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3">
                <div className="w-100 h-100 md:w-80 md:h-80 lg:-translate-x-26">
                        <Image alt='avatar' width={1000} height={1000} className="rounded-full border-neutral w-full h-full object-cover bg-transparent opacity-90" src="/me.gif"/>
                    </div>
                </div>

                <div className="flex-1 text-left mx-4 mt-4 md:mt-0 md:mx-0 md:p-6">
                    <div className="flex flex-col gap-2.5">
                        <p className="text-3xl font-semibold">{name}</p>
                        <p className='text-blue-800 w-fit rounded py-1 px-2 text-sm dark:text-blue-600 bg-blue-50 dark:bg-blue-900/10'>{title}</p>
                        <p className="text-sm md:text-base my-2 text-gray-600 dark:text-gray-300">{about}</p>
                        <p className="text-sm md:text-base my-2 text-gray-600 dark:text-gray-300">{aboutt}</p>
                        <div className="flex items-center gap-4 md:mt-4">
                            {resumeUrl.trim() && <Link href={resumeUrl} target="_blank" className="text-sm md:text-base bg-blue-600 dark:bg-blue-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow">Resume</Link>}
                            {callUrl.trim() && <Link href={callUrl} target="_blank" className="text-blue-600 flex items-center gap-1 hover:bg-blue-50 hover:dark:bg-blue-900/10 py-2 px-4 transition-colors rounded-md">Book a 1:1 call <BiLinkExternal /> </Link>}
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default About