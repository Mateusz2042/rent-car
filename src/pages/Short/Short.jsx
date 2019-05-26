import React, {Component} from 'react';

import RouteButton from '../../components/Button'
import DatePicker from '../../components/DatePicker'
import Search from '../../components/Search'
import Map from '../../components/Map'
import calendarIcon from '../../assets/calendar.png'

import './_short.scss';

class Short extends Component {
  state = {
    cities: ['Warszawa', 'Poznań', 'Łódź', 'Gdańsk', 'Bydgoszcz', 'Wrocław', 'Kraków'],
    focus: false,
    check: false
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

  render() {
    return (
      <div className='short'>
        <div className='section-left'>
          <div>
            <label>Od:</label>
            <div className='with-icon'>
              <DatePicker />
              <img src={calendarIcon} alt='calendar' />
            </div>
          </div>

          <div>
            <label>Do:</label>
            <div className='with-icon'>
              <DatePicker />
              <img src={calendarIcon} alt='calendar' />
            </div>
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
          <RouteButton title="Dalej" url="/krotki-wybor" />
        </div>
        <div className='section-right'>
          <Map />
        </div>
      </div>
    );
  }
};

export default Short;
