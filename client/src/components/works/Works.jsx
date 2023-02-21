import { useEffect, useState } from 'react'
import supabase from '../../database/supabase'
import { motion } from "framer-motion"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const [content, setContent] = useState([])

    useEffect(() => {
        async function getFeatured() {
            let query = supabase.from('slider').select('*')
            if (currentSlide === 0)
                query = query.eq('cSlide', 0)
            else if (currentSlide === 1)
                query = query.eq('cSlide', 1)
            else if (currentSlide === 2)
                query = query.eq('cSlide', 2)
            const { data: content, error } = await query
            if (!error) setContent(content)
            else alert('There was a problem getting data')
        }
        getFeatured()
    }, [currentSlide])

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    }

    return (
        <div className='works' id='works'>
            <div className="slider"
            >
                {content.map((d) => (
                    <motion.div
                        animate={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        key={d.id}
                        className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="man" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>
            <img
                src="assets/img/arrow.png"
                alt="arrow-left"
                className="arrow left"
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/img/arrow.png"
                alt="arrow-right"
                className="arrow right"
                onClick={() => handleClick()}
            />


        </div>
    )
}
