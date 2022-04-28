import NavItem from "../components/NavItem";

const Nav = ({ dir, scheme }) => {
    const dirs = {
        horizontal: "justify-center space-x-10",
        vertical: "flex-col space-y-10 px-10 py-10",
    };

    const pickedDir = dirs[dir];
    return (
        <ul className={`flex ${pickedDir}`}>
            <NavItem scheme={scheme} href="#profile">
                Profile
            </NavItem>
            <NavItem scheme={scheme} href="#skills">
                Skills
            </NavItem>
            <NavItem scheme={scheme} href="#projects">
                Projects
            </NavItem>
            <NavItem scheme={scheme} href="#contacts">
                Contacts
            </NavItem>
        </ul>
    );
};

export default Nav;
