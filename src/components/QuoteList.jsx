import React from "react"
import PropTypes from "prop-types"

const QuoteList = props => {
  const { quotes } = props
  return (
    <div>
      <div className="quotations">
        {quotes.map(quote => (
          <blockquote key={quote.name} className="quotation">
            <p>{quote.quote}</p>
            <cite>—{quote.name}</cite>
          </blockquote>
        ))}
      </div>
    </div>
  )
}

QuoteList.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default QuoteList
