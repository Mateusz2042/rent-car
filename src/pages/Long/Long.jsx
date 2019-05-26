import React, {Component} from 'react';

import RouteButton from '../../components/Button'
import Search from '../../components/Search'
import Map from '../../components/Map'

import './_long.scss';

class Long extends Component {
  state = {
    cities: ['Warszawa', 'Poznań', 'Łódź', 'Gdańsk', 'Bydgoszcz', 'Wrocław', 'Kraków'],
    focus: false,
    check: false,
    period: null
  }

  anotherPlace = () => {
    this.setState({
      check: !this.state.check
    })
  }

  getLocations = () => {
    return this.state.cities.map((element, index) => {
      return <span key={index}>{element}</span>
    })
  }

  onChange = e => {
    this.setState({
      period: e.target.value
    })
  }

  getInfo = () => {
    switch (this.state.period) {
      case '6': return '6 miesięcy, dobry wybór';
      case '12': return '12 miesięcy, konkretny wybór';
      case '24': return '24 miesięcy, Będzie dobra cena';
      default: return ''
    }
  }

  render() {
    return (
      <div className='long'>
        <div className='section-left'>
          <div className='period'>
            <label className='label'>Okres najmu:</label>
            <div className='box'>
              <div>
                <input type="radio" name="6" value="6" onChange={(e) => this.onChange(e)} />6 miesięcy
              </div>
              <div>
                <input type="radio" name="12" value="12" onChange={(e) => this.onChange(e)} />12 miesięcy
              </div>
              <div>
                <input type="radio" name="24" value="24" onChange={(e) => this.onChange(e)} />24 miesiace
              </div>
            </div>
            <label className='info'>Informacje:</label>
            <div>{this.getInfo()}</div>

          </div>
          <label style={{marginTop: 30}}>Miejsce odbioru: </label>
          <Search />
          <div className='another'>
            <label><input type='checkbox' onChange={() => this.anotherPlace()} checked={this.state.check} />Inne miejsce zdania</label>
            {this.state.check && <input type='text' /> }
          </div>
          <div className='localizations'>
            <p>Dostępne lokalizacje</p>
            {this.getLocations()}
          </div>
          <RouteButton title="Dalej" url="/dlugi-wybor" />
        </div>
        <div className='section-right'>
          <Map />
        </div>
      </div>
    );
  }
};

export default Long;
