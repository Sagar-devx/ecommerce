import React from 'react';

const DescriptionDetails = () => {
  const highlights = [
    { title: "100% Pure Organic Cotton", desc: "Breathable, soft & skin-friendly fabric." },
    { title: "Pre-Shrunk & Color Fast", desc: "Long-lasting fit and color retention." },
    { title: "Easy 30-Day Returns", desc: "Hassle-free instant replacement or refund." },
    { title: "Free Express Shipping", desc: "Fast doorstep delivery within 3-5 days." },
  ];

  return (
    <div className="description-details">
      <p>
        An e-commerce website is an online platform that facilitates the buying and selling of products over the internet. It provides a convenient digital marketplace for seamless shopping anytime, anywhere.
      </p>
      <p>
        This garment is designed with precision stitching and high-grade breathable material for premium daily wear comfort and durability.
      </p>

      <div className="description-highlights">
        {highlights.map((item, index) => (
          <div key={index} className="highlight-item">
            <span className="highlight-dot">✓</span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionDetails;
