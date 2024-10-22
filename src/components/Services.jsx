import React from 'react';
import '../App.css';

export const services = [
  { id: "1", name: 'Periodic Services', icon: '📅' },
  { id: "2", name: 'AC Service & Repair', icon: '❄️' },
  { name: 'Batteries', icon: '🔋' },
  { name: 'Tyres & Wheel Care', icon: '🚙' },
  { name: 'Denting & Painting', icon: '🎨' },
  { name: 'Detailing Services', icon: '🚗' },
  { name: 'Car Spa & Cleaning', icon: '🧽' },
  { name: 'Car Inspections', icon: '📋', isNew: true },
  { name: 'Windshields & Lights', icon: '💡' },
  { name: 'Suspension & Fitments', icon: '🔧' },
  { name: 'Clutch & Body Parts', icon: '⚙️' },
  { name: 'Insurance Claims', icon: '🛡️' }
];

const ServicesGrid = () => {
  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <span className="service-icon">{service.icon}</span>
          <span className="service-name">
            {service.name} {service.isNew && <span className="new-label">New</span>}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
