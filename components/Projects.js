const Projects = () => {
    return (
        <section id="projects" className="py-24 ">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold text-center">
                    Latest Projects
                </h1>
                <div className="flex flex-wrap items-center p-10 md:w-12/12 lg:w-10/12 mx-auto">
                    <div className="md:w-6/12 w-full md:px-5 lg:px-10 my-5 lg:my-10">
                        <img src="./Project1.png" className="w-full" />
                    </div>
                    <div className="md:w-6/12 w-full md:px-5 lg:px-10 my-5 lg:my-10">
                        <img src="./Project2.png" className="w-full" />
                    </div>
                    <div className="md:w-6/12 w-full md:px-5 lg:px-10 my-5 lg:my-10">
                        <img src="./Project3.png" className="w-full" />
                    </div>
                    <div className="md:w-6/12 w-full md:px-5 lg:px-10 my-5 lg:my-10">
                        <img src="./Project4.png" className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
