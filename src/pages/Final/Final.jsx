import React, {Component} from 'react';
import RouteButton from '../../components/Button'
import './_final.scss'

class Final extends Component {

  render() {
    return (
      <div className='final'>
        <div className='section-left'>
          <label>Dane Kontaktowe: </label>
          <input type='text' placeholder='Imię' />
          <input type='text' placeholder='Nazwisko' />
          <textarea rows="24" cols="100">
          </textarea>
          <div className='account'>
            <label><input type='checkbox' />Utwórz konto z tymi danymi</label>
          </div>
          <RouteButton title="Zamawiam i płacę" url="/" />
        </div>
        <div className='section-right'>
          <div className='first-row'>
            <div className='info'>
              <label>Informacje o umowie / szczegóły umowy</label>
              <div>Umowa została sporządzona w dwóch jednoznacznie brzmiących egzeplarzach</div>
            </div>
            <div className='price-elements'>
              <label>Kosztorys</label>
              <ul>
                <li>Wynajem</li>
                <li>Podstawienie auta</li>
                <li>Podstawowe ubezpieczenie</li>
                <li>Wyposażenie dodatkowe</li>
                <li>Udogodnienia</li>
                <li>Możliwość zwrotu w nocy</li>
              </ul>
            </div>
          </div>

          <div className='final-price'>000000 zł</div>

          <div className='second-row'>
            <div className='insurance'>
              <label>Ubezpieczenie:</label>
              <ul>
                <li>holowanie do 200 km w kraju</li>
                <li>holowanie do 100 km za granicą</li>
                <li>Auto zastępcze</li>
                <li>Nocleg w przypadku uszkodzenia za granicą</li>
              </ul>
            </div>
            <div className='payment'>
              <label>Metoda płatności:</label>
              <div className='box'>
                <div>
                  <input type="radio" name="local" value="local" />W lokalu
                </div>
                <div>
                  <input type="radio" name="transfer" value="transfer" />Przelewem
                </div>
                <div>
                  <input type="radio" name="card" value="card" />Kartą
                </div>
                <div>
                  <input type="radio" name="immediately" value="immediately" />Przelew natychmiastowy
                </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Final;
