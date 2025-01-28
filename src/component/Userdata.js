import React, { useState, useEffect } from 'react';

const Userdata = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((info) => {
        setData(info); 
        console.log(info); 
        setLoading(false); 
      })
      .catch((err) => {
        alert(`Error Occurred: ${err.message}`); 
        setLoading(false); 
      });
  }, []);

  return (
    <>
      {loading ? (
        <h1>Data Loading.....</h1>
      ) : (
        <>
          <h1>User Data</h1>
          <h4>"Practice useEffect Hook, using API"</h4>
          <div className="container">
            {data && data.length > 0 ? (
              data.map((user) => (
                <div className="row" key={user.id}>
                <h4 className="p">{`${user.name}`}</h4>
                  <p className="p">{`Email : ${user.email}`}</p>
                  <p className="p">{`City: ${user.address.city}`}</p>
                  <p className="p">{`Zipcode: ${user.address.zipcode}`}</p>
                </div>
              ))
            ) : (
              <h3>User Data Not Found</h3>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Userdata;
