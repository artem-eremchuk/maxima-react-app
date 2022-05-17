import React from 'react';
import Button from '../Button/Button';
import './Counter.css';

class Counter extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  decrement(){
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
  }

  render() {
    return (
      <div className="container center">
        <div className='counter'>
          <Button 
            content="-" 
            handlerClick={this.decrement}
          />
          <div className='counter-display'>
            {this.state.counter}
          </div>
          <Button 
            content="+" 
            handlerClick={this.increment}
          />
        </div>
      </div>
    )
  }
}

export default Counter;