import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({
  HeaderFontColor,
  HeaderFontSize,
  HeaderFontFamily,
  Header,
  subHeaderFontColor,
  subHeaderFontSize,
  subHeaderFontFamily,
  subHeader,
  dateFontColor,
  dateFontSize,
  dateFontFamily,
  tags,
  showTags = false,
  date,
  showDate = false,
  backgroundImage,
  borderColor,
  borderWidth,
  borderRadius,
  onClick
}) => {
  return (
    <div>
      <div className="card-grid-space">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          href={`${onClick}`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            borderColor,
            borderWidth,
            borderRadius
          }}
        >
          <div>
            <h1
              style={{
                color: HeaderFontColor,
                fontSize: HeaderFontSize,
                fontFamily: HeaderFontFamily
              }}
            >
              {Header}
            </h1>
            <p
              style={{
                color: subHeaderFontColor,
                fontSize: subHeaderFontSize,
                fontFamily: subHeaderFontFamily
              }}
            >
              {subHeader}
            </p>
            {showDate && (
              <div
                className="date"
                style={{
                  color: dateFontColor,
                  fontSize: dateFontSize,
                  fontFamily: dateFontFamily
                }}
              >
                {date}
              </div>
            )}
            <div className="tags">
              {showTags &&
                tags.map((tag, index) => (
                  <div className="tag" key={index}>
                    {tag}
                  </div>
                ))}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

Card.defaultProps = {
  HeaderFontColor: "red",
  HeaderFontSize: "small",
  HeaderFontFamily: "serif",
  subHeaderFontColor: "black",
  subHeaderFontSize: "small",
  subHeaderFontFamily: "serif",
  dateFontColor: "black",
  dateFontSize: "small",
  dateFontFamily: "serif",
  tags: [],
  showTags: false,
  date: null,
  showDate: false,
  backgroundImage: "white",
  borderColor: "black",
  borderWidth: "1px",
  borderRadius: "25px",
  onClick: () => {}
};

Card.propTypes = {
  HeaderFontColor: PropTypes.string,
  HeaderFontSize: PropTypes.string,
  HeaderFontFamily: PropTypes.string,
  Header: PropTypes.element,
  subHeaderFontColor: PropTypes.string,
  subHeaderFontSize: PropTypes.string,
  subHeaderFontFamily: PropTypes.string,
  subHeader: PropTypes.element,
  dateFontColor: PropTypes.string,
  dateFontSize: PropTypes.string,
  dateFontFamily: PropTypes.string,
  tags: PropTypes.array,
  showTags: PropTypes.bool,
  date: PropTypes.instanceOf(Date),
  showDate: PropTypes.bool,
  backgroundImage: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func
};

export default Card;
