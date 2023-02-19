import { Person, Mail } from "@mui/icons-material"


export default function Topbar({ setMenuOpen, menuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href={"https://github.com/nadirozsoy"} target={"_blank"} className='logo'>github.</a>
                    <div className="itemContainer">
                        <Person className='icon' />
                        <span>+44 524 32 79</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon' />
                        <span>nadir@github.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen((!menuOpen))}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div >
    )
}
