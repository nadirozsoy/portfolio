import Typed from "typed.js"
import { useEffect, useRef } from 'react'


export default function Intro() {
    const el = useRef(null)
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 150,
            backSpeed: 150,
            backDelay: 150,
            smartBackspace: true,
            loop: true,
            showCursor: false,
        })

        // Destropying
        return () => {
            typed.destroy()
        }
    }, [])



    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/img/man.png" alt="man" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Nadir Özsoy</h1>
                    <h3>Front-End <span ref={el}></span>
                    </h3>
                </div>
                <a href="#portfolio"></a>
            </div>
        </div>
    )
}
