import { useState } from "react";
import Star from "./Star";
import RatingText from "./RatingText";
// import PropTypes from "prop-types";

const Rating = ({
  maxRating = 10,
  color = "#BACC4A",
  textColor = "#ffff",
  size = "24px",
  defaultRating = 0,
  message = ["terrible", "okay", "good", "best", "excellent"],
  onRatingChange,
}) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    onRatingChange?.(rate);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        PointerEvent: "none",

      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            color={color}
            size={size}
            full={(tempRating ? tempRating : rating) > i}
            onClick={() => handleRating(i + 1)}
            onMouseEnter={() => setTempRating(i + 1)}
            onMouseLeave={() => setTempRating(0)}
          />
        ))}
        <RatingText
          textColor={textColor}
          tempRating={tempRating}
          rating={rating}
          maxRating={maxRating}
          message={message}
        />
      </div>
    </div>
  );
};


export default Rating;
