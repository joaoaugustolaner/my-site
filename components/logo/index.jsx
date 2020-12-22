import Link from 'next/link'
import logo from '../../styles/components/logo/Logo.module.css'
import style from "../../styles/components/logo/Logo.module.css"

export default function Logo() {
    return(

        // <Link href="/">
        //     <img src="/logo.jpeg" alt="Logo" className={logo.logo_container}/>
        // </Link>


        <div className={style.logo_container}>
            <div className={style.first_bracket}></div>
            <h3 className={style.title}>J.Dev</h3>
            <div className={style.end}></div>
            <div className={style.second_bracket}></div>
        </div>
    );
}