import React from 'react'

const QuoteList = props => {
  const { quotes } = props
  return (
    <div>
      <div className="quotations">
        {quotes.map(quote => (
          <blockquote key={quote.name} className="quotation">
            <p>{quote.quote}</p>
            <cite>— {quote.name}</cite>
          </blockquote>
        ))}
      </div>
    </div>
  )
}

export default QuoteList