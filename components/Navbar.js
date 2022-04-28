import { useState, useEffect } from "react";
import ButtonHeader from "./ButtonHeader";
import Logo from "./Logo";
import Nav from "./Nav";

const Navbar = () => {
    const [offCanvas, setOffCanvas] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const toggleMenu = offCanvas ? "right-0" : "-right-full";
    const scrollNav = isScroll
        ? "w-full top-0 left-0 bg-navbar fixed lg:py-2 lg:px-16 py-4 px-5"
        : "py-10";
    const handleScroll = () => {
        if (window.scrollY > 400) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div className={`flex items-center transition-all  ${scrollNav}`}>
                <div className="w-3/12">
                    <Logo />
                </div>
                <div className="w-6/12 hidden md:block">
                    <Nav dir="horizontal" scheme="light" />
                </div>
                <div className="w-3/12 text-right hidden md:block">
                    <ButtonHeader variant={"outline-yellow"} pill="true">
                        Login
                    </ButtonHeader>
                </div>
                <div className="w-9/12 text-right md:hidden">
                    <img
                        src="menu.svg"
                        className="inline-block cursor-pointer"
                        onClick={() => setOffCanvas(true)}
                    />
                </div>
            </div>
            <div
                className={`fixed top-0 z-10 bg-white w-full h-full md:hidden transition-all ${toggleMenu}`}
            >
                <div className="w-full text-right p-10">
                    <img
                        src="x.svg"
                        className="inline-block cursor-pointer"
                        onClick={() => setOffCanvas(false)}
                    />
                </div>
                <Nav dir="vertical" scheme="dark" />
            </div>
        </>
    );
};

export default Navbar;
