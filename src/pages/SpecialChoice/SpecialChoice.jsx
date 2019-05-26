import React, {Component} from 'react';

import Gallery from '../../components/Gallery'
import one from '../../assets/special/aston.png'
import two from '../../assets/special/camaro.png'
import three from '../../assets/special/ferrari.jpg'
import four from '../../assets/special/gtr.jpg'
import five from '../../assets/special/mclaren.jpg'
import six from '../../assets/special/mustang.jpg'
import seven from '../../assets/special/r8.jpg'
import eight from '../../assets/special/bugatti.jpg'

import SearchCar from '../../components/SearchCar'
import RouteButton from '../../components/Button'
import './_specialChoice.scss';

class SpecialChoice extends Component {

  gallery = () => {
    return [
      { original: one, thumbnail: one, description: "Cena: 3400 zł" },
      { original: two, thumbnail: two, description: "Cena: 850 zł" },
      { original: three, thumbnail: three, description: "Cena: 2500 zł" },
      { original: four, thumbnail: four, description: "Cena: 750 zł" },
      { original: five, thumbnail: five, description: "Cena: 3500 zł" },
      { original: six, thumbnail: six, description: "Cena: 900 zł" },
      { original: seven, thumbnail: seven, description: "Cena: 780 zł" },
      { original: eight, thumbnail: eight, description: "Cena: 5200 zł" },
    ]
  }

  getCars = () => {
    return ['Aston MArtin Vanquish', 'Bugatti Chiron', 'Chevrolet Camaro', 'Ferrari f430', 'Nissan GTR', 'MC Laren f1', 'Ford Mustang', 'Audi R8']
  }

  render() {
    return (
      <div className='special-choice'>
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

          <label><input type='checkbox' />Szofer</label>

          <RouteButton title="Dalej" url="/final-info" />

        </div>
        <div className='section-right'>
          <Gallery images={this.gallery()} />
        </div>
      </div>
    );
  }
};

export default SpecialChoice;
