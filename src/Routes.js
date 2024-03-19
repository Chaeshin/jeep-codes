import React from 'react';
import './App.css';

function Routes({ routesList }) {
  const parseTable = () => {
    return {
      "01A": ['Alpha', 'Bravo', 'Charlie', 'Echo', 'Golf'],
      "02B": ['Alpha', 'Delta', 'Echo', 'Foxtrot', 'Golf'],
      "03C": ['Charlie', 'Delta', 'Foxtrot', 'Hotel', 'India'],
      "04A": ['Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf'],
      "04D": ['Charlie', 'Echo', 'Foxtrot', 'Golf', 'India'],
      "06B": ['Delta', 'Hotel', 'Juliet', 'Kilo', 'Lima'],
      "06D": ['Delta', 'Foxtrot', 'Golf', 'India', 'Kilo'],
      "10C": ['Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet'],
      "10H": ['Foxtrot', 'Hotel', 'Juliet', 'Lima', 'November'],
      "11A": ['Foxtrot', 'Golf', 'Kilo', 'Mike', 'November'],
      "11B": ['Foxtrot', 'Golf', 'Lima', 'Oscar', 'Papa'],
      "20A": ['India', 'Juliet', 'November', 'Papa', 'Romeo'],
      "20C": ['India', 'Kilo', 'Lima', 'Mike', 'Romeo'],
      "42C": ['Juliet', 'Kilo', 'Lima', 'Mike', 'Oscar'],
      "42D": ['Juliet', 'November', 'Oscar', 'Quebec', 'Romeo'],
    };
  };

  const findCommonPlaces = () => {
    const placesArrays = routesList.map(code => parseTable()[code]);
    if (placesArrays.length === 0) return [];
    return placesArrays.reduce((commonPlaces, currentPlaces) => {
      return commonPlaces.filter(place => currentPlaces.includes(place));
    });
  };

 
    const highlightPlaces = (place) => {
    const commonPlaces = findCommonPlaces();

    const commonToAll = routesList.every(route => parseTable()[route].includes(place));
    const commonToSome = routesList.some(route => parseTable()[route].includes(place));

    if (commonToAll) {
        return <span className="highlight" style={{ color: '#FFFF00' }}>{place}</span>; 
    } else if (commonToSome) {
        const color = commonPlaces.includes(place) ? '#FF0000' : '#4CCD99';
        return <span className="highlight" style={{ color }}>{place}</span>; 
    } else {
        return <span >{place}</span>; 
    }
    };

  return (
    <div className="Routes">
      {routesList.map((route, index) => (
        <div className="Places" key={index}>
          <div className='jeep'>Jeepney Route: <span>{route}</span></div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {parseTable()[route].map((place, idx) => (
              <div className="Place" key={idx}>
                {highlightPlaces(place)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Routes;
