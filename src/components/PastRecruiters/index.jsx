import React, {useState } from 'react'
import Collage from './Collage'

const IndexCollage = () => {
  const data = [
    { id: 19, url: '/src/components/assets/company/20.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 14, url: '/src/components/assets/company/15.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 4 },
    { id: 15, url: '/src/components/assets/company/16.jpg', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 16, url: '/src/components/assets/company/17.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 17, url: '/src/components/assets/company/18.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 18, url: '/src/components/assets/company/19.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 42, url: '/src/components/assets/company/mbit.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 43, url: '/src/components/assets/company/deloitte.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 20, url: '/src/components/assets/company/21.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 1, url: '/src/components/assets/company/1.png', alt: 'Image 1', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 2, url: '/src/components/assets/company/2.png', alt: 'Image 2', placedCount: 100, lastYearPlacementCount: 10, CTC: 8 },
    { id: 3, url: '/src/components/assets/company/3.png', alt: 'Image 3', placedCount: 112, lastYearPlacementCount: 14, CTC: 7.5 },
    { id: 4, url: '/src/components/assets/company/4.jpg', alt: 'Image 4', placedCount: 140, lastYearPlacementCount: 23, CTC: 10 },
    { id: 5, url: '/src/components/assets/company/5.jpg', alt: 'Image 5', placedCount: 300, lastYearPlacementCount: 10, CTC: 6 },
    { id: 6, url: '/src/components/assets/company/6.png', alt: 'Image 6', placedCount: 110, lastYearPlacementCount: 12, CTC: 8 },
    { id: 7, url: '/src/components/assets/company/7.png', alt: 'Image 6', placedCount: 100, lastYearPlacementCount: 12, CTC: 7 },
    { id: 8, url: '/src/components/assets/company/8.png', alt: 'Image 6', placedCount: 10, lastYearPlacementCount: 1, CTC: 9 },
    { id: 9, url: '/src/components/assets/company/9.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 12 },
    { id: 10, url: '/src/components/assets/company/11.png', alt: 'Image 6', placedCount: 222, lastYearPlacementCount: 22, CTC: 15 },
    { id: 11, url: '/src/components/assets/company/12.png', alt: 'Image 6', placedCount: 130, lastYearPlacementCount: 22, CTC: 6 },
    { id: 12, url: '/src/components/assets/company/13.png', alt: 'Image 6', placedCount: 120, lastYearPlacementCount: 22, CTC: 5 },
    { id: 13, url: '/src/components/assets/company/14.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 3 },
    
    { id: 21, url: '/src/components/assets/company/22.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 22, url: '/src/components/assets/company/23.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 23, url: '/src/components/assets/company/24.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 24, url: '/src/components/assets/company/25.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 25, url: '/src/components/assets/company/26.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 26, url: '/src/components/assets/company/27.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 27, url: '/src/components/assets/company/28.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 28, url: '/src/components/assets/company/29.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 29, url: '/src/components/assets/company/30.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 30, url: '/src/components/assets/company/31.jpg', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 31, url: '/src/components/assets/company/32.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 32, url: '/src/components/assets/company/33.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 33, url: '/src/components/assets/company/34.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 34, url: '/src/components/assets/company/35.jpg', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 35, url: '/src/components/assets/company/36.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 36, url: '/src/components/assets/company/37.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 37, url: '/src/components/assets/company/38.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 38, url: '/src/components/assets/company/39.jpg', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 39, url: '/src/components/assets/company/40.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 40, url: '/src/components/assets/company/41.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
    { id: 41, url: '/src/components/assets/company/42.png', alt: 'Image 6', placedCount: 140, lastYearPlacementCount: 22, CTC: 10 },
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