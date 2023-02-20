import { useEffect, useState } from 'react'
import supabase from '../../database/supabase'
import PortfolioList from './portfolioList/PortfolioList'
<<<<<<< HEAD


export default function Portfolio({ setIsLoading }) {
    const [selected, setSelected] = useState("all")
=======
import Data from './data/Data'
import data from './data/Data'

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
>>>>>>> 924cee24c28c153cd1e184e8569b4dd16e17419e
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
<<<<<<< HEAD

            let query = supabase.from('portfolio').select('*')
            if (selected !== "all")
                query = query.eq('category', selected)
            const { data: datas, error } = await query
            if (!error) setDatas(datas)
            else alert('There was a problem getting data')
=======
            // setIsLoading(true)

            let query = supabase.from('featuredPortfolio').select('*')
            if (selected === 'featured')
                query = query.eq('category', selected)

            const { data: datas, error } = await query
            // .limit(100)

            if (!error) setDatas(datas)
            else alert('There was a problem getting data')
            // setIsLoading(false)
>>>>>>> 924cee24c28c153cd1e184e8569b4dd16e17419e
        }
        getFeatured()
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h2>Portfolio</h2>
            <ul>
<<<<<<< HEAD
                <li
                    className={selected === "all" ? "active" : null}
                    onClick={() => setSelected("all")}>
                    All
                </li>
=======
>>>>>>> 924cee24c28c153cd1e184e8569b4dd16e17419e
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

<<<<<<< HEAD
            <div className="container">
                {datas.map((d) => (
                    <figure className="item">
                        <img src={d.img} alt="" />
                        <figcaption>{d.title}</figcaption>
                    </figure>
                ))}
            </div>
=======
            {datas.map((data) => (
                <Data
                    key={data.id}
                    data={data}
                />
            ))}
>>>>>>> 924cee24c28c153cd1e184e8569b4dd16e17419e
        </div>
    )
}
