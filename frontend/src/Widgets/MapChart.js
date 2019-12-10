import React, { PureComponent } from 'react';
import { VectorMap } from "react-jvectormap";

import axios from 'axios';


const handleClick = (e, countryCode) => {
  console.log(countryCode);
};

/** Le code pour la carte n'est pas optimisé (pas de boucle) et pas complet (pas tous les pays)
 * mais l'idée principale est présente
 */



export default class MapChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      usersFrance: [],
      usersPoland: [],
      usersMalaysia: [],
      usersSlovenia: [],
      usersItaly: [],
      usersThailand: [],
      usersAlbania: [],
      usersGreece: [],
      usersPhilippines: [],
      usersCzechRepublic: [],
      usersJapan: [],
      usersPeru: [],
      usersRussia: [],
      usersMorocco: [],
      usersChina: [],
      usersUs: [],
      usersCanada: [],
    }

  }

  componentDidMount() {
    axios.get('http://localhost:3000/users/getCountry')
      .then(res => {
        console.log(res.data);

        this.setState({ users: res.data });

        for (let i= 0; i < this.state.users.length; i++) {
          if (this.state.users[i]._id === 'france') {
            this.setState({ usersFrance: res.data[i] });
            console.log(res.data[i].sum);
          }
          if (this.state.users[i]._id === 'poland') {
            this.setState({ usersPoland: res.data[i] });
            console.log(res.data[i].sum);
          }
          if (this.state.users[i]._id === 'malaysia') {
            this.setState({ usersMalaysia: res.data[i] });
          }
          if (this.state.users[i]._id === 'slovenia') {
            this.setState({ usersSlovenia: res.data[i] });
          }
          if (this.state.users[i]._id === 'italy') {
            this.setState({ usersItaly: res.data[i] });
          }
          if (this.state.users[i]._id === 'thailand') {
            this.setState({ usersThailand: res.data[i] });
          }
          if (this.state.users[i]._id === 'china') {
            this.setState({ usersChina: res.data[i] });
          }
          if (this.state.users[i]._id === 'albania') {
            this.setState({ usersAlbania: res.data[i] });
          }
          if (this.state.users[i]._id === 'greece') {
            this.setState({ usersGreece: res.data[i] });
          }
          if (this.state.users[i]._id === 'japan') {
            this.setState({ usersJapan: res.data[i] });
          }
          if (this.state.users[i]._id === 'peru') {
            this.setState({ usersPeru: res.data[i] });
          }
          if (this.state.users[i]._id === 'russia') {
            this.setState({ usersRussia: res.data[i] });
          }
          if (this.state.users[i]._id === 'morocco') {
            this.setState({ usersMorocco: res.data[i] });
          }
          if (this.state.users[i]._id === 'canada') {
            this.setState({ usersCanada: res.data[i] });
          }
          if (this.state.users[i]._id === 'united states') {
            this.setState({ usersUs: res.data[i] });
          }
        }

      })
      .catch(function (error) {
        alert("Sarah" + error);
      })
  }
  render() {
    const mapData = {
      CN: this.state.usersChina.sum,
      PL: this.state.usersPoland.sum,
      SI: this.state.usersSlovenia.sum,
      IT: this.state.usersItaly.sum,
      MY: this.state.usersMalaysia.sum,
      TH: this.state.usersThailand.sum,
      AL: this.state.usersAlbania.sum,
      FR: this.state.usersFrance.sum,
      GR: this.state.usersGreece.sum,
      JP: this.state.usersJapan.sum,
      PE: this.state.usersPeru.sum,
      RU: this.state.usersRussia.sum, 
      MA: this.state.usersMorocco.sum,
      CA: this.state.usersCanada.sum,
      US: this.state.usersUs.sum,
    };
    return (
      <div>
        <VectorMap
          map={"world_mill"}
          backgroundColor="transparent" //change it to ocean blue: #0077be
          zoomOnScroll={false}
          containerStyle={{
            width: "100%",
            height: "520px"
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer"
            },
          }}
          series={{
            regions: [
              {
                values: mapData, //this is your data
                scale: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"], //your color game's here
                // normalizeFunction: "polynomial",
                legend: {
                  vertical: true
                }
              }
            ]
          }}
        />
      </div>
    );
  }
}

