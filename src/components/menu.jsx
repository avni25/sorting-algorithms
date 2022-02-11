import React from 'react';
import Visualizer from './visualizer';

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){

    }

    handleClick(){
     Visualizer.setState({
            arr: Visualizer.createRandomarr(100, 10, 500)
     });  
        
    }

    render(){
        return(
            <div className="menu-container">
                <button onClick={this.handleClick}>New Array</button>
            </div>
        );
    }
}


export default Menu;

