import React from 'react';
import star_icon from '../../assets/star_icon.png';
import dull_star_icon from '../../assets/star_dull_icon.png';

const DescriptionReviews = () => {
  const reviews = [
    {
      avatar: "RK",
      name: "Rahul Kumar",
      date: "2 days ago",
      stars: 5,
      comment: "Fitting is absolutely perfect! The fabric quality is top-notch and super soft.",
    },
    {
      avatar: "AS",
      name: "Ananya Sharma",
      date: "1 week ago",
      stars: 4,
      comment: "Delivery was very fast. Color and stitch quality looks great in real life.",
    },
  ];

  return (
    <div className="description-reviews">
     
      <div className="reviews-summary">
        <h2>4.8</h2>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={star_icon} alt="star" />
          ))}
        </div>
        <p>Based on 135 verified customer ratings</p>
      </div>

      <div className="reviews-list">
        {reviews.map((rev, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <span className="reviewer-avatar">{rev.avatar}</span>
                <div>
                  <strong>{rev.name}</strong>
                  <span className="verified-badge">✓ Verified Buyer</span>
                </div>
              </div>
              <span className="review-date">{rev.date}</span>
            </div>
            <div className="review-stars">
              {[...Array(rev.stars)].map((_, i) => (
                <img key={i} src={star_icon} alt="star" />
              ))}
              {rev.stars < 5 && <img src={dull_star_icon} alt="star" />}
            </div>
            <p className="review-text">{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionReviews;
