import { useEffect, useState } from 'react'
import supabase from '../../database/supabase'
import PortfolioList from './portfolioList/PortfolioList'


export default function Portfolio() {
    const [selected, setSelected] = useState("all")

    const [datas, setDatas] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "content",
            title: "Content"
        },
    ]

    useEffect(() => {
        async function getFeatured() {
            let query = supabase.from('portfolio').select('*')
            if (selected !== "all")
                query = query.eq('category', selected)
            const { data: datas, error } = await query
            if (!error) setDatas(datas)
            else alert('There was a problem getting data')
        }
        getFeatured()
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h2>Portfolio</h2>
            <ul>
                <li
                    className={selected === "all" ? "active" : null}
                    onClick={() => setSelected("all")}>
                    All
                </li>

                {list.map((item) =>
                    <PortfolioList
                        key={item.id}
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                )}
            </ul>
            <div className="container">
                {datas.map((d) => (
                    <figure className="item">
                        <img src={d.img} alt="" />
                        <figcaption>{d.title}</figcaption>
                    </figure>
                ))}
            </div>

        </div>
    )
}
