import React, {Component} from 'react';

import Gallery from '../../components/Gallery'
import one from '../../assets/long/audi.jpg'
import two from '../../assets/long/bmw.jpg'
import three from '../../assets/long/nissan.jpg'
import four from '../../assets/long/sportage.jpg'
import five from '../../assets/long/superb.png'
import six from '../../assets/long/x6.jpg'

import SearchCar from '../../components/SearchCar'
import RouteButton from '../../components/Button'
import './_longChoice.scss';

class LongChoice extends Component {

  gallery = () => {
    return [
      { original: one, thumbnail: one, description: "Cena: 200 zł" },
      { original: two, thumbnail: two, description: "Cena: 240 zł" },
      { original: three, thumbnail: three, description: "Cena: 160 zł" },
      { original: four, thumbnail: four, description: "Cena: 155 zł" },
      { original: five, thumbnail: five, description: "Cena: 65 zł" },
      { original: six, thumbnail: six, description: "Cena: 235 zł" },
    ]
  }

  getCars = () => {
    return ['Audi A8', 'BMW 7', 'Nissan Quasqai', 'Kia Sportage', 'Skoda Superb', 'BMW X6']
  }

  render() {
    return (
      <div className='long-choice'>
        <div className='section-left'>
          <SearchCar items={this.getCars()} />
          <div className='elements'>Elementy wyposażenia: </div>

          <label>Ilość miejsc:</label>
          <select>
            <option value="2 osobowe">2 osobowe</option>
            <option value="4 osobowe">4 osobowe</option>
            <option value="5 osobowe">5 osobowe</option>
          </select>

          <label>Typ nadwozia:</label>
          <select>
            <option value="Limuzyna">Limuzyna</option>
            <option value="Hatchback">Hatchback</option>
            <option value="SUV">SUV</option>
            <option value="Kombi">Kombi</option>
            <option value="Coupe">Coupe</option>
          </select>

          <label className='label-gear'>Skrzynia biegów:</label>
          <div className='gear-box'>
            <div>
              <input type="radio" name="manual" value="manual" />Manualna
            </div>
            <div>
              <input type="radio" name="automat" value="automat" />Automatyczna
            </div>
          </div>

          <label className='label-km'>Limit kilometrów:</label>
          <div className='km-box'>
            <div>
              <input type="radio" name="1000" value="1000" />1000 km
            </div>
            <div>
              <input type="radio" name="2000" value="2000" />2000 km
            </div>
            <div>
              <input type="radio" name="10000" value="10000" />10000 km
            </div>
          </div>

          <RouteButton title="Dalej" url="/final-info" />

        </div>
        <div className='section-right'>
          <Gallery images={this.gallery()} />
        </div>
      </div>
    );
  }
};

export default LongChoice;
