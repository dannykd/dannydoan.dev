


interface ExperienceProps{
    img: string,
    role: string,
    timespan: string,
    description: string
}

const Experience = ({ img, role, timespan, description }: ExperienceProps) => {

    return (
        <div className="dark:bg-black bg-white outline outline-1 dark:outline-white hover:outline-blue-400 rounded-lg px-2 p-4 text-base">
            <div className="flex space-x-4 border-b border-black dark:border-white px-2">
                <img className="rounded-lg mb-2 outline outline-white outline-1" src={img} height="48" width="48"></img>
                <div className="flex flex-col mb-2 space-y-2">
                    <h1 className="text-blue-white">{role}</h1>
                    <p className="text-sm">{timespan}</p>
                </div>
            </div>
            <p className="p-4 text-neutral-700 dark:text-neutral-300">{description}</p>
        </div>
    )
    
}

export default Experience;