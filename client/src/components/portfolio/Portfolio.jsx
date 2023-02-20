import { useEffect, useState } from 'react'
import supabase from '../../database/supabase'
import PortfolioList from './portfolioList/PortfolioList'
import Data from './data/Data'
import data from './data/Data'

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
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
            // setIsLoading(true)

            let query = supabase.from('featuredPortfolio').select('*')
            if (selected === 'featured')
                query = query.eq('category', selected)

            const { data: datas, error } = await query
            // .limit(100)

            if (!error) setDatas(datas)
            else alert('There was a problem getting data')
            // setIsLoading(false)
        }
        getFeatured()
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h2>Portfolio</h2>
            <ul>
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

            {datas.map((data) => (
                <Data
                    key={data.id}
                    data={data}
                />
            ))}
        </div>
    )
}
