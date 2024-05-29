import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

interface CountryData {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: {
    lat: number;
    long: number;
  };
}

const Map: React.FC = () => {
  const [worldData, setWorldData] = useState<any>(null);
  const [countryData, setCountryData] = useState<CountryData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const worldDataResponse = await axios.get('https://disease.sh/v3/covid-19/all');
        setWorldData(worldDataResponse.data);

        const countryDataResponse = await axios.get('https://disease.sh/v3/covid-19/countries');
        setCountryData(countryDataResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
   <>
   
    <div className=' md:w-[79vw] md:h-[90vh] md:text-center md:absolute md:top-[10vh] md:left-[21vw]
      bg-white-300 md:border-2 md:border-gray-400 md:p-[40vh]  md:text-[4vh] p-[6vh] w-[98vw] absolute top-[60vh] text-[5vh] text-center h-auto  text-[#0052A2]'>
    <>Map Below ↓</>
    </div>
    <div className="h-screen">
      <MapContainer center={[0, 0]} zoom={2} className="h-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {countryData.map((country) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div className="bg-white rounded-md shadow-md p-4">
                <h3 className="text-lg font-bold mb-2">{country.country}</h3>
                <p className="text-gray-700">Active Cases: {country.active}</p>
                <p className="text-gray-700">Recovered Cases: {country.recovered}</p>
                <p className="text-gray-700">Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
    </>
  );
};

export default Map;