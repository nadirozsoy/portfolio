import { useEffect, useState } from 'react'
import supabase from '../../database/supabase'

export default function Testimonials() {
    const [content, setContent] = useState([])

    useEffect(() => {
        async function getFeatured() {
            const { data: content, error } = await supabase.from('testimonials').select('*')
            if (!error) setContent(content)
            else alert('There was a problem getting data')
        }
        getFeatured()
    }, [])

    return (
        <div className='testimonials' id='testimonials'>
            <h2>Testimonials</h2>
            <div className="container">
                {content.map((d) => (
                    <div key={d.id} className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img
                                src="assets/img/right-arrow.png"
                                className='left'
                                alt="arrow" />
                            <img
                                src={d.img}
                                className="user"
                                alt="person" />
                            <img
                                src={d.icon}
                                className="right"
                                alt="youtube" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
