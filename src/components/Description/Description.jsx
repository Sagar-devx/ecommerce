import React, { useState } from 'react';
import './Description.css';
import DescriptionDetails from './DescriptionDetails';
import DescriptionReviews from './DescriptionReviews';

const Description = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="descriptionbox">
    
      <div className="descriptionbox-navigator">
        <button
          className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : 'fade'}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : 'fade'}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (135)
        </button>
      </div>

      <div className="descriptionbox-content">
        {activeTab === 'description' ? <DescriptionDetails /> : <DescriptionReviews />}
      </div>
    </div>
  );
};

export default Description;