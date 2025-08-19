import React from 'react'

export default function KnowledgeCard({ card }) {
    return (
        <div className="card">
            <div className="card-t">
                <div className="icon">
                    {card.iconSvg}
                </div>
                <h2>{card.title}</h2>
            </div>
            <p>{card.details}</p>


        </div>

  );
}
