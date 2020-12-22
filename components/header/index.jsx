import Logo from "../logo";

import header from '../../styles/components/header/Header.module.css'
import Option from "../options";
export default function Header() {

    return (
        <div className={header.container} >
            <div className={header.logo}>
                <Logo />
            </div>
            <div className={header.menu}>
                <Option route="/" option="Home" />
                <Option route="/projects" option="Projects" />
                <Option route="/contact" option="Contact" />
            </div>
        </div>
    );
}