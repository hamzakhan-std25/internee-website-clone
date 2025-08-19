export default function BasicCard({ card }) {
    return (
        <div className="card basic-card">
            <div className="icon">
                {card.iconSvg}
            </div>
            <div className="l-details">
                <h2>{card.title}</h2>
                <p>{card.details}</p>
            </div>
        </div>

    );
}

