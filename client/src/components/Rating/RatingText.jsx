// import PropTypes from "prop-types";

const RatingText = ({ textColor, tempRating, rating, maxRating, message }) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "fit-content",
          width:"30px",
          height:"30px",
        }}
      >
        <p className="mx-2 mb-0 h-100 d-flex align-items-end justify-content-center " style={{ color: textColor ,fontWeight:"600", fontSize:"16px",}}>
          {tempRating || rating || "0"}
        </p>
      </div>
    );
  };

  
  export default RatingText;
  