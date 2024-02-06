import React, { useState, useEffect } from 'react'
import Collage from './Collage'
import { useLocation } from 'react-router-dom';



const IndexCollage = () => {
  const location = useLocation()
  useEffect(
    () => {
      if (location.state || !location.state) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, [location.state]
  )
  function getImagePath(imageName) {

    return `/company/${imageName}`;
  }
  const data = [
    { id: 19, url: getImagePath("20.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 14, url: getImagePath("15.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 4 },
    { id: 15, url: getImagePath("16.jpg"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 16, url: getImagePath("17.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 17, url: getImagePath("18.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 18, url: getImagePath("19.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 42, url: getImagePath("mbit.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 43, url: getImagePath("deloitte.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 20, url: getImagePath("21.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 1, url: getImagePath("1.png"), alt: 'Image 1', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 2, url: getImagePath("2.png"), alt: 'Image 2', placedCount: 100, lastYearPlacementCount: 10, CTC: 8 },
    { id: 3, url: getImagePath("3.png"), alt: 'Image 3', placedCount: 112, lastYearPlacementCount: 14, CTC: 7.5 },
    { id: 4, url: getImagePath("4.jpg"), alt: 'Image 4', placedCount: 140, lastYearPlacementCount: 23, CTC: 10 },
    { id: 5, url: getImagePath("5.jpg"), alt: 'Image 5', placedCount: 300, lastYearPlacementCount: 10, CTC: 6 },
    { id: 6, url: getImagePath("6.png"), alt: 'Image 6', placedCount: 110, lastYearPlacementCount: 12, CTC: 8 },
    { id: 7, url: getImagePath("7.png"), alt: 'Image 6', placedCount: 100, lastYearPlacementCount: 12, CTC: 7 },
    { id: 8, url: getImagePath("8.png"), alt: 'Image 6', placedCount: 10, lastYearPlacementCount: 1, CTC: 9 },
    { id: 9, url: getImagePath("9.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 12 },
    { id: 10, url: getImagePath("11.png"), alt: 'Image 6', placedCount: 222, lastYearPlacementCount: 22, CTC: 15 },
    { id: 11, url: getImagePath("12.png"), alt: 'Image 6', placedCount: 130, lastYearPlacementCount: 22, CTC: 6 },
    { id: 12, url: getImagePath("13.png"), alt: 'Image 6', placedCount: 120, lastYearPlacementCount: 22, CTC: 5 },
    { id: 13, url: getImagePath("14.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 3 },

    { id: 21, url: getImagePath("22.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 22, url: getImagePath("21.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 23, url: getImagePath("22.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 24, url: getImagePath("23.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 25, url: getImagePath("24.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 26, url: getImagePath("25.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 27, url: getImagePath("26.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 28, url: getImagePath("27.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 29, url: getImagePath("28.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 30, url: getImagePath("29.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 31, url: getImagePath("30.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 32, url: getImagePath("31.jpg"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 33, url: getImagePath("32.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 34, url: getImagePath("33.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 35, url: getImagePath("34.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 36, url: getImagePath("35.jpg"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 37, url: getImagePath("36.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 38, url: getImagePath("37.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 39, url: getImagePath("38.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 40, url: getImagePath("39.jpg"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 41, url: getImagePath("40.png"), alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
  ]

  return (
    <>
      <h1 className='past_recruiters' >Our <span>Recruiters </span></h1>
      <div className="container">
        <div className="row collage_row">
          {data.map((image) => (
            <Collage key={image.id} value={image} />
          ))}
        </div>
      </div>

    </>
  )
}

export default IndexCollage