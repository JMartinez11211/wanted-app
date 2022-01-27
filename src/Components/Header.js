import {Link} from "react-router-dom"


export default function Header() {
    return (
        <div>
            <nav id="nav">
            <Link to='home'> Home </Link>
            <Link to='about'> About </Link>
            <Link to='Field_Offices'> Field Offices </Link>
        </nav>
        </div>

    )
}