import React from "react";

function QuotesSimpson({ quote }) {
  return (
    <div className="QuotesSimpson">
      <img src={quote.image} alt={quote.character} />
      <ul>
        <li>Name: {quote.character}</li>

        <li>Quote : {quote.quote}</li>
      </ul>
    </div>
  );
}

export default QuotesSimpson;
