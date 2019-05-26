import React, {Component} from "react";
import { filter } from 'lodash'
import searchIcon from '../../assets/search.png'
import "./_search.scss"

class Search extends Component {
  state = {
    cities: ['Warszawa', 'Poznań', 'Łódź', 'Gdańsk', 'Bydgoszcz', 'Wrocław', 'Kraków'],
    text: '',
    focus: false,
    check: false
  }

  onChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  onChangeCity = e => {
    this.setState({
      text: e.target.textContent,
      focus: false
    })
  }

  getSearchingBox = () => {
    return filter(this.state.cities, x => x.startsWith(this.state.text)).map((element, index) => {
      return <span key={index} onClick={e => this.onChangeCity(e)}>{element}</span>
    })
  }

  toogleFocus = () => {
    this.setState({
      focus: true
    })
  }

  render() {
    return (
      <div className='search'>
        <div className='search-input'>
          <img src={searchIcon} alt='search' />
          <input value={this.state.text} onChange={e => this.onChange(e)} onFocus={() => this.toogleFocus()} />
        </div>
        <div className={this.state.focus ? 'box focus' : 'box' }>
          {this.getSearchingBox()}
        </div>
      </div>
    );
  }
}

export default Search
