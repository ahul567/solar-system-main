import React from 'react'
import '../piechart.css'
export default function Listingcomp({text}) {
  return (
    <div>
      <div className="status-listing">
      <span className="all-listings">{text}</span>
     </div>
    </div>
  )
}
