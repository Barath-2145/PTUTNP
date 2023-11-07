import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const MyComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const sdata ={"name":"hi"}
        const response = await fetch('http://localhost/react_php/tnp/api.php',{method:'POST',body: JSON.stringify(sdata),});
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessage();
  }, []);

  return <div>{message}</div>;
};

export default MyComponent;
