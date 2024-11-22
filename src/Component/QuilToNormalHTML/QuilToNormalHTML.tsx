import React from "react";

const QuilToNormalHTML = ({ description, maxLength }) => {
  const shortenedContent = maxLength
    ? description.substring(0, maxLength) + "..."
    : description;

  return <p dangerouslySetInnerHTML={{ __html: shortenedContent }} />;
};

export default QuilToNormalHTML;
