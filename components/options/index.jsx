import style from "../../styles/components/option/Option.module.css"
import Link from "next/link"
export default function Option(props) {

    return (
        <div className={style.container}>
            <Link href={`${props.route}`}>
                <h3>{props.option}</h3>
            </Link>
        </div>
    )
}