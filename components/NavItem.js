const NavItem = ({ href, scheme, children }) => {
    const schemes = {
        dark: "text-black",
        light: "text-white",
    };
    const pickedScheme = schemes[scheme];
    return (
        <li>
            <a
                href={href}
                className={`transition text-lg  opacity-60 font-semibold hover:opacity-100 ${pickedScheme}`}
            >
                {children}
            </a>
        </li>
    );
};

export default NavItem;
