import { useState, useEffect } from "react";
import ButtonHeader from "./ButtonHeader";
import Logo from "./Logo";
import Nav from "./Nav";
import SocMediaModal from "./SocMediaModal";
import firebase from "../config/firebase-config";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [offCanvas, setOffCanvas] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const [showSosmed, setShowSosmed] = useState("hidden");
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

    const handlePopUp = () => {
        setShowSosmed("");
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
            // alert("ok");
        });
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
                    <ButtonHeader
                        variant={"outline-yellow"}
                        pill="true"
                        withAction="true"
                        showPopUp={handlePopUp}
                    >
                        {user ? user.displayName : "Login"}
                    </ButtonHeader>
                </div>
                <SocMediaModal
                    user={user}
                    isHidden={showSosmed}
                    onClose={() => setShowSosmed("hidden")}
                />
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
