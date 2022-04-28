import { useEffect, useState } from "react";
const ScrollToTop = () => {
    const [toggleButton, setToggleButton] = useState(false);
    const toggled = toggleButton ? "opacity-100" : "opacity-0";
    const toggleScrollButton = () => {
        if (window.scrollY > 400) {
            setToggleButton(true);
        } else {
            setToggleButton(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleScrollButton);
    });
    return (
        <a
            href="#top"
            className={`fixed right-0 bottom-0 bg-navbar m-10 rounded-full p-2 transition-all ${toggled}`}
        >
            <img src="chevrons-up.svg" className="inline-block w-10" />
        </a>
    );
};

export default ScrollToTop;
