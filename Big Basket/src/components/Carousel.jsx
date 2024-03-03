import React from 'react'

export const Carousel = () => {
  return (
    <div><div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className='carousel-caption shadow p-2 rounded' style={{zIndex:"1", backdropFilter:"blur(10px) contrast(150%) brightness(80%)"}}>
        <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success btn-success text-white" type="submit">Search</button>
    </form>
        </div>
      <div className="carousel-item active">
        <img src="https://source.unsplash.com/random/900x700?pancakes" classNameName="d-block w-100" style={{maxWidth:"300px", maxHeight:"200px"}} alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x700?pizza" className="d-block w-100" style={{maxWidth:"300px", maxHeight:"200px"}} alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x700?foods" className="d-block w-100" style={{maxWidth:"300px", maxHeight:"200px"}} alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}
