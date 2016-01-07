import React, { Component } from 'react';
import SparkLineChart from '../components/SparkLineChart';
import GoogleCityMap from '../components/GoogleCityMap';

const WeatherListItem = ({cityData, deleteCity}) => {

  const temps = cityData.list.map(weather => weather.main.temp_f);
  const pressures = cityData.list.map(weather => weather.main.pressure);
  const humidities = cityData.list.map(weather => weather.main.humidity);
  const { lat, lng } = cityData.city.coord;

  return (
    <tr>
      <td className="googlemap"><GoogleCityMap lat={lat} lng={lng} /></td>
      <td><SparkLineChart data={temps} color="red" units="&deg;F" /></td>
      <td><SparkLineChart data={pressures} color="blue" units="hPa"/></td>
      <td><SparkLineChart data={humidities} color="orange" units="%"/></td>
      <td><button className="btn btn-danger"
                  onClick={() => deleteCity(cityData.city.id)}
          >
          X
          </button>
      </td>
    </tr>
  )
};

export default WeatherListItem;
