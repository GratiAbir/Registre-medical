import React from 'react';
import './GridView.css';

function GridView({ items }) {
    return (
      <div className="grid-view">
        {items.map((item) => (
          <div className="grid-item">
            <img src={item.image} alt={item.name} />
            <div className="info">
              <p className="name">{item.name}</p>
              <p className="speciality">{item.speciality}</p>
              <div className="button-group">
                {item.buttons.map((buttonText) => (
                  <button key={buttonText}>{buttonText}</button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default GridView;