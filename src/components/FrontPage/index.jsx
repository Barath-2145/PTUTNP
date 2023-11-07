import React, { useState } from 'react';
import './index.css';
import Announcement from '../announcement/index';

const SectionComponent = () => {

    return (
        <> 
            <div className="container">
                <div className="introduction">
                    <h1 className="heading">Welcome to TNP!</h1>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cumque, fugiat architecto ipsum rem, voluptatem aspernatur labore et fugit enim a? Placeat voluptas dicta dolores corporis. Iste sapiente error quisquam.</p>
                </div>
                <div className="section2">
                    <div className="vision-mission">
                        <div className="vision">
                            <h2>Vision</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, est! Nulla, iure. Suscipit vel non vitae nobis assumenda quam repudiandae soluta iusto molestias. Dolore consequatur aperiam molestiae quod ut odit!</p>
                        </div>
                        <div className="mission">
                            <h2>Vision</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, est! Nulla, iure. Suscipit vel non vitae nobis assumenda quam repudiandae soluta iusto molestias. Dolore consequatur aperiam molestiae quod ut odit!</p>
                        </div>
                    </div>
                    <div className="announcement">
                        <Announcement />
                    </div>
                </div>
            </div> 
        


    </>
  );
};
export default SectionComponent;