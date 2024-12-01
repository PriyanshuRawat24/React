import React, { useState, useEffect } from 'react';

function Github() {
  const [data, setData] = useState(null);  // Initially setting data as null

  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
      .then((res) => res.json())
      .then((data) => {
        setData(data);  // Setting the data to state after fetching
      })
      .catch((error) => console.log('Error fetching data:', error)); // Handling fetch errors
  }, []);  // Empty dependency array to fetch data only once on mount

  return (
    <div className='text-center m-5 bg-orange-600 text-white text-5xl p-9'>
      {data ? (  // Checking if data is available before rendering
        <>
          <h1>Github Followers: {data.followers}</h1>
          <img
            className='m-5 rounded-lg mb-20'
            src={data.avatar_url}  // Displaying the avatar image of the user
            alt="GitHub profile"
            width={300}
          />
        </>
      ) : (
        <h1>Loading...</h1>  // Show loading text until data is fetched
      )}
    </div>
  );
}

export default Github;
