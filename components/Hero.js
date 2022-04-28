import ButtonHeader from "./ButtonHeader";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <section className="bg-hero pb-10 lg:h-[450px] xl:h-[600px] 2xl:h-[655px]">
            <div className="container mx-auto px-10 2xl:px-0">
                <Navbar />
                <div className="text-center md:mt-10 lg:mt-20 xl:mt-32">
                    <h1 className="text-3xl font-semibold font-mono text-white w-full mx-auto">
                        Saya seorang Full Stack Developer
                    </h1>
                    <p className="text-white text-lg text-opacity-60 md:w-4/12 w-full mx-auto">
                        Lorem Ipsum Dolor Sit Amet
                    </p>
                    <ButtonHeader
                        className="mt-10"
                        variant={"yellow"}
                        pill="true"
                    >
                        Start Learn
                    </ButtonHeader>
                </div>
            </div>
        </section>
    );
};

export default Hero;
