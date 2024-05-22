import React from 'react';

const Directions = ({ routes }) => {
  if (!routes || routes.length === 0) {
    return <p>No directions available.</p>;
  }
  return (
    <div>
      <h2>Hospital Directions:</h2>
      <hr />
      <ol>
        {routes.map((route, index) => ( 
          <React.Fragment key={index}>
            <li>{route[0].instruction?.text || 'No instruction available'}</li>
            <li>{route[1].instruction?.text || 'No instruction available'}</li>
            <li>{route[2].instruction?.text || 'No instruction available'}</li>
            <li>{route[3].instruction?.text || 'No instruction available'}</li>
            <li>{route[4].instruction?.text || 'No instruction available'}</li>
            <li>{route[5].instruction?.text || 'No instruction available'}</li>
            <li>{route[6].instruction?.text || 'No instruction available'}</li>
            <li>{route[7].instruction?.text || 'No instruction available'}</li>
            <li>{route[8].instruction?.text || 'No instruction available'}</li>
            <li>{route[9].instruction?.text || 'No instruction available'}</li>
            <li>{route[10].instruction?.text || 'No instruction available'}</li>
            <li>{route[11].instruction?.text || 'No instruction available'}</li>
            <li>{route[12].instruction?.text || 'No instruction available'}</li>
            <li>{route[13].instruction?.text || 'No instruction available'}</li>
            <li>{route[14].instruction?.text || 'No instruction available'}</li>
            <li>{route[15].instruction?.text || 'No instruction available'}</li>
            <li>{route[16].instruction?.text || 'No instruction available'}</li>
          </React.Fragment>
        ))}
      </ol>
    </div>
  );
};

export default Directions;