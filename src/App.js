import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { connect } from 'react-redux';
import { fetchFarm, fetchCrops, setCrop } from './actions';
import  CropSelect from './components/crop'

class App extends Component {
  componentDidMount () {
    const {dispatch} = this.props;
    dispatch(fetchFarm());
    dispatch(fetchCrops());
  }

  getYield = (field) => {
      if (!!field.crop) {
          const {crop} = field;
          return crop.expected_yield * field.hectares / (crop.disease_risk_factor * field.disease_susceptibility) * crop.price_per_tonne
      } else {
          return 0;
      }
  };

  render() {
    const {activeFarm, dispatch} = this.props;

    return (
      <div>
        <header className='header'>
          <h1>{activeFarm.name}</h1>
        </header>
        <Map className='body'
          center={activeFarm.centre ? activeFarm.centre.coordinates : [0,0] }
          zoom={13}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {activeFarm.fields.map(field => <GeoJSON key={field.name} data={field.boundary} />)}
        </Map>
        <ul className='left'>
            {activeFarm.fields.map(field => <li key={field.name}>
                <div>Feild: {field.name}</div>
                <img className='icon' src="/img/map-localization-icon-14.png"></img>
                <div>Crop: <CropSelect value={field.crop || {name: ''}} onChange={crop => dispatch(setCrop(field, crop)) }></CropSelect></div>
                <div>Yield: {this.getYield(field)}</div>
            </li>)}
        </ul>
      </div>
    );
  }
}

App = connect(
  ({ farmsState }) => ({ activeFarm: farmsState.activeFarm })
)(App);

export default App;