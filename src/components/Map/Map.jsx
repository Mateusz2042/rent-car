import React, {Component} from 'react'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import './_map.scss'

class Mapa extends Component {
  render() {
    return(
      <Map center={[52.323274, 19.135068]} zoom={6.5} width={800} height={600}>
        <Marker anchor={[52.212517, 20.971006]} payload={1} onClick={({ event, anchor, payload }) => {}} />
        <Marker anchor={[52.404166, 16.955771]} payload={1} onClick={({ event, anchor, payload }) => {}} />
        <Marker anchor={[51.082566, 17.042244]} payload={1} onClick={({ event, anchor, payload }) => {}} />
        <Marker anchor={[50.041714, 19.947222]} payload={1} onClick={({ event, anchor, payload }) => {}} />
        <Marker anchor={[51.750893, 19.459259]} payload={1} onClick={({ event, anchor, payload }) => {}} />
        <Marker anchor={[53.108387, 18.004961]} payload={1} onClick={({ event, anchor, payload }) => {}} />
        <Marker anchor={[54.345365, 18.644668]} payload={1} onClick={({ event, anchor, payload }) => {}} />
      </Map>
    )
  }
}

export default Mapa
