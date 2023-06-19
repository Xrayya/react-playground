import React, { useEffect, useState } from 'react';

const DisplayData = () => {
  const [useData, setData] = useState({});

  const endPoint = 'https://dummyjson.com/products/';
  async function getData() {
    const api = await fetch(endPoint);
    const data = await api.json();
    setData(data);
  }

  useEffect(() => {
    console.log(useData);
  }, [useData]);

  return (
    <div style={{ color: 'white' }}>
      <h3>Display Data from API</h3>
      <button onClick={getData}>get data</button>
    </div>
  );
};

export default DisplayData;
