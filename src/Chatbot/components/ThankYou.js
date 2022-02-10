import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function ThankYou() {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    // other logic
  };

  return (
    <div>
      <p>Welcome, Please rate us your experience with us.</p>
      <Rating
        onClick={handleRating}
        ratingValue={rating} /* Available Props */
      />
    </div>
  );
}
