export default function PortfolioList({ title, active, setSelected, id }) {

    return (
        <>
            <li
                className={active ? "active" : null}
                onClick={() => setSelected(id)}
            >
                {title}

            </li>
        </>
    )
}
