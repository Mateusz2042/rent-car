import React, {Component} from 'react';
import './_contact.scss'

class Contact extends Component {

  render() {
    return (
      <div className='contact'>
        <div>Wypożyczalnia samochodowa <strong>Group Sp. z o. o.</strong></div>
        <div>ul. Wesoła 38</div>
        <div>00-001 Warszawa</div>
        <div className='message'>Napisz do nas:</div>
        <textarea rows="8" cols="100">
        </textarea>
        <button>Wyślij</button>
      </div>
    );
  }
};

export default Contact;
