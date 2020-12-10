import React from 'react';
import Block from './Block';
import { v4 as uuidv4 } from 'uuid';

class SimulationModule extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        data: [{
          status: 'Принят', 
          statusNumber: 1, 
          time: new Date().toLocaleTimeString(), 
          id: uuidv4()
        }]
      }
  }

  componentDidMount () {
    this.timeoutId = setInterval(function () {
      this.state.data.push({
        status: 'Принят',
        statusNumber: 1, 
        time: new Date().toLocaleTimeString(), 
        id: uuidv4()
        });
      this.setState({data: this.state.data});
    }.bind(this), 90000);
  } 

  render () {
     
    return (
      <div className="App">
        <h1>Заказы ресторана</h1>
        {this.state.data.map((el_data)=><Block key={el_data.id} data={el_data}/>)}
    </div>
    );
}
}


export default SimulationModule;
