import React, {Component} from 'react';

import Gallery from '../../components/Gallery'
import one from '../../assets/long/audi.jpg'
import two from '../../assets/long/bmw.jpg'
import three from '../../assets/long/nissan.jpg'
import four from '../../assets/long/sportage.jpg'
import five from '../../assets/long/superb.png'
import six from '../../assets/long/x6.jpg'

import one1 from '../../assets/short/bravo.jpg'
import two1 from '../../assets/short/chr.jpg'
import three1 from '../../assets/short/fabia.jpg'
import four1 from '../../assets/short/grande.jpg'
import five1 from '../../assets/short/panda.jpg'
import six1 from '../../assets/short/yaris.jpg'

import one2 from '../../assets/special/aston.png'
import two2 from '../../assets/special/camaro.png'
import three2 from '../../assets/special/ferrari.jpg'
import four2 from '../../assets/special/gtr.jpg'
import five2 from '../../assets/special/mclaren.jpg'
import six2 from '../../assets/special/mustang.jpg'
import seven2 from '../../assets/special/r8.jpg'
import eight2 from '../../assets/special/bugatti.jpg'

class GalleryPage extends Component {

  gallery = () => {
    return [
      { original: one, thumbnail: one },
      { original: two, thumbnail: two },
      { original: three, thumbnail: three },
      { original: four, thumbnail: four },
      { original: five, thumbnail: five },
      { original: six, thumbnail: six },
      { original: one1, thumbnail: one1 },
      { original: two1, thumbnail: two1 },
      { original: three1, thumbnail: three1 },
      { original: four1, thumbnail: four1 },
      { original: five1, thumbnail: five1 },
      { original: six1, thumbnail: six1 },
      { original: one2, thumbnail: one2 },
      { original: two2, thumbnail: two2 },
      { original: three2, thumbnail: three2 },
      { original: four2, thumbnail: four2 },
      { original: five2, thumbnail: five2 },
      { original: six2, thumbnail: six2 },
      { original: seven2, thumbnail: seven2 },
      { original: eight2, thumbnail: eight2 },
    ]
  }

  render() {
    return (
      <Gallery images={this.gallery()} />
    );
  }
};

export default GalleryPage;
