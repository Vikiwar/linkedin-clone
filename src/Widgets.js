import React from "react";
import "./widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("instagram went down", "top news-9099 reader")}
      {newsArticle("corona virus update", "top news-866 reader")}
      {newsArticle("crypto fall", "top news-1099 reader")}
      {newsArticle("tesla hits sky", "top news-899 reader")}
      {newsArticle("petrol price hikes", "top news-709 reader")}
    </div>
  );
}

export default Widgets;
