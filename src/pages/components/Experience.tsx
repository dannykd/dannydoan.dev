import Image from "next/image"


interface ExperienceProps{
    img: string,
    role: string,
    timespan: string,
    description: string
}

const Experience = ({ img, role, timespan, description }: ExperienceProps) => {

    return (
        <div className="dark:bg-[#0b0b0b] bg-white rounded-lg border dark:border-white/40 border-black/20 px-2 p-4">
            <div className="flex space-x-4 border-b border-black/20 dark:border-white/40 px-2">
                <Image className="mb-2 rounded-lg" src={img} height="48" width="48" layout="fixed"></Image>
                <div className="flex flex-col mb-2 space-y-2">
                    <h1 className="">{role}</h1>
                    <p className="text-sm">{timespan}</p>
                </div>
            </div>
            <p className="p-4 text-neutral-700 dark:text-neutral-300">{description}</p>
        </div>
    )
    
}

export default Experience;