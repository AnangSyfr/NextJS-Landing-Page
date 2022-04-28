import SkillCard from "./SkillCard";

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-skills">
            <div className="container  mx-auto">
                <h1 className="text-2xl font-bold text-center">Skills</h1>
                <div className="flex items-center justify-center mt-12 md:w-12/12 lg:w-10/12 mx-auto flex-wrap">
                    <SkillCard
                        name="PHP"
                        image="./PHP.png"
                        level="Advanced"
                        imageClassName="h-16"
                    />
                    <SkillCard
                        name="Codeigniter"
                        image="./Codeigniter.png"
                        level="Advanced"
                        imageClassName="h-16"
                    />
                    <SkillCard
                        name="Flutter"
                        image="./Flutter.png"
                        level="Advanced"
                        imageClassName="h-16"
                    />
                    <SkillCard
                        name="Javascript"
                        image="./Javascript.png"
                        level="Advanced"
                        imageClassName="h-16"
                    />
                    <SkillCard
                        name="React"
                        image="./React.png"
                        level="Advanced"
                        imageClassName="h-16"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
