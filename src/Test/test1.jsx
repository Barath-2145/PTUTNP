import React from 'react';
import './text1.css';

const ExploreComponent = () => {

    // const [expanded, setExpanded] = useState(false);
  
    // const handleToggle = () => {
    //   setExpanded(!expanded);
    // };

    const dynamicStyleS3 = {
      flex: '2', // Example of another static CSS property
    };
    const dynamicStyleS2 = {
      flex: '1', // Example of another static CSS property
    };

  return (
    <>
    <div className="explore-container">
      <div className="bounding-line"></div>
      <button className="explore-button">Explore</button>
    </div>
    <div className='container'>
      <div className='section1'> 
        <div className='sec1-1'>
          <h1>AIC-PTU History</h1> 
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quod quo aspernatur adipisci laboriosam dolorum amet </p>
        </div>
        <div className='sec1-2'>
          <p>34years of history in training and preparation.</p>        
        </div>
      </div>
      
      <div className='section2' style={dynamicStyleS2}>
        <h1>About TNP</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quod quo aspernatur adipisci laboriosam dolorum amet, voluptas molestiae nobis sint est atque tempore, vitae iusto saepe laborum maiores quasi sit!</p>
      </div>

      <div className='section3' style={dynamicStyleS3}>
        <div className='sec3-1'>
          <h1>Connect Experts</h1>
            <div className="image-container">
              <div className="image image-left">
                <img src="src/assets/pictures/2.png" alt="Image 1" />
              </div>
              <div className="image image-middle">
                <img src="src/assets/pictures/3.png" alt="Image 2" />
              </div>
              <div className="image image-right">
                <img src="src/assets/pictures/4.jpg" alt="Image 2" />
              </div>
            </div>
        </div>
        <div className='sec3-2'>
          <h1>510+ <br /> Placements <br />2023 batch</h1>
        </div>
      </div>
    </div>
    </>
  );
};

export default ExploreComponent;
