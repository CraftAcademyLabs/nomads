import React, { useState, useEffect } from 'react'
import axios from 'axios'
import _orderBy from 'lodash/orderBy';

const App = () => {
  const [promoContent, setPromoContent] = useState([])

  useEffect(() => {
    axios.get('/promoContent.json').then(response => {
      setPromoContent(_orderBy(response.data.promos, 'position', 'asc'))
    })
  }, [])

  let promoContentDisplay = promoContent.map(contentItem => {
    return (
      <div className="promo-content" key={contentItem.position}>
        <h1 >{contentItem.header}</h1>
      </div>
    )
  })

  return (
    <>
      <div id="main">
        <h1>Craft Academy NOMADS</h1>
        <div id="promo">
          {promoContentDisplay}
        </div>
      </div>
    </>
  )
}

export default App
