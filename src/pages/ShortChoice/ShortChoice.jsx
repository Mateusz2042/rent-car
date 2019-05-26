import React, {Component} from 'react';

import Gallery from '../../components/Gallery'
import one from '../../assets/short/bravo.jpg'
import two from '../../assets/short/chr.jpg'
import three from '../../assets/short/fabia.jpg'
import four from '../../assets/short/grande.jpg'
import five from '../../assets/short/panda.jpg'
import six from '../../assets/short/yaris.jpg'
import SearchCar from '../../components/SearchCar'
import RouteButton from '../../components/Button'
import './_shortChoice.scss';

class ShortChoice extends Component {

  gallery = () => {
    return [
      { original: one, thumbnail: one, description: "Cena: 90 zł" },
      { original: two, thumbnail: two, description: "Cena: 120 zł" },
      { original: three, thumbnail: three, description: "Cena: 125 zł" },
      { original: four, thumbnail: four, description: "Cena: 115 zł" },
      { original: five, thumbnail: five, description: "Cena: 140 zł" },
      { original: six, thumbnail: six, description: "Cena: 110 zł" },
    ]
  }

  getCars = () => {
    return ['Fiat Bravo II', 'Toyota CHR', 'Skoda Fabia', 'Fiat Punto Grande', 'Fiat Panda', 'Toyota Yaris']
  }

  render() {
    return (
      <div className='short-choice'>
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

          <label><input type='checkbox' />Fotelik dziecięcy</label>
          <label><input type='checkbox' />Uchwyt na rowery</label>

          <label className='label-gear'>Skrzynia biegów:</label>
          <div className='gear-box'>
            <div>
              <input type="radio" name="manual" value="manual" />Manualna
            </div>
            <div>
              <input type="radio" name="automat" value="automat" />Automatyczna
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

export default ShortChoice;
