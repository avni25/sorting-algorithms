import React from 'react';
import {mergeSort} from '../algorithms/sortinAlgos.js';

class Visualizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr: this.createRandomarr(100, 10, 500)
        };
        this.handleClick = this.handleClick.bind(this);
    }

    createRandomarr(len, from, to){
        let arr = [];
        for (let i = 0; i < len; i++) {
            let val = Math.floor(Math.random() * (to - from + 1) + from);
            arr.push(val);            
        }

        return arr;
    }

    handleClick(e){
        let val = e.target.innerText;        
        if(val === 'new-array'){
            this.setState({
                arr: this.createRandomarr(100, 10, 500)
            });
        }else if(val === 'merge-sort'){
            console.log("1");
            this.setState({
                arr: mergeSort(this.state.arr)
            });
            console.log("2");
        }
    }

    mergeSort(arr){

    }






    render(){
        
        return(
            <div > 
                <div className="menu-container">
                    <button onClick={this.handleClick}>new-array</button> 
                    <button onClick={this.handleClick}>merge-sort</button> 
                    <button onClick={this.handleClick}>New Array</button> 
                    <button onClick={this.handleClick}>New Array</button> 
                    <button onClick={this.handleClick}>New Array</button>  
                </div>
                <div className ="vis-container">
                {this.state.arr.map((item, index) => (
                    <div className='bar' key={index} style={{
                        backgroundColor: '#33E9FF',
                        height: `${item}px`,
                        width: "5px", 
                    }}></div>
                ))}
                </div>                 
            </div>
        );
    
    }

}

export default Visualizer;


