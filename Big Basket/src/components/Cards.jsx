import React from 'react'

export const Cards = () => {
  return (
    <div className="card mt-3" style={{"width": "20rem", "maxWidth":"360px"}}>
        <img src="https://source.unsplash.com/random/200x200?foods" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
                {
                  Array.from(Array(5), (e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )
                  })
                }
            </select>
            <select className="m-2 h-100 bg-success rounded">
                  <option value="half">half</option>
                  <option value="full">full</option>
            </select>
            <div className="d-inline h-100 fs-5">
                Total Price
            </div>
        </div>
      </div>
  )
}
