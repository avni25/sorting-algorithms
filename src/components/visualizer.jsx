import React from 'react';
import {createRandomarr, mergeSort, quickSort, bubbleSort} from '../algorithms/sortinAlgos.js';
import pg from '../algorithms/pg.js';

let ARRAY_LEN = 100;
let ARRAY_MIN = 10;
let ARRAY_MAX = 500;

class Visualizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr: createRandomarr(ARRAY_LEN, ARRAY_MIN, ARRAY_MAX),
            time: 0.0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick(e){
        let val = e.target.innerText;   
        // console.time("qwe");
        pg.asd();
        if(val === 'new-array'){
            this.setState({
                ...this.state,
                arr: createRandomarr(ARRAY_LEN, ARRAY_MIN, ARRAY_MAX)                
            });
        }else if(val === 'merge-sort'){
            
            this.setState({
                ...this.state,
                arr: mergeSort(this.state.arr).reverse()                
            });            
        }else if(val === 'quick-sort'){
            
            this.setState({
                ...this.state,
                arr: quickSort(this.state.arr).reverse()                
            });            
        }else if(val === 'bubble-sort'){
            
            this.setState({
                ...this.state,
                arr: bubbleSort(this.state.arr).reverse()                
            });            
        }

        
    }

    

    render(){
        
        return(
            <div > 
                <div className="menu-container">
                    <button className="button-3" onClick={this.handleClick}>new-array</button> 
                    <button className="button-3" onClick={this.handleClick}>merge-sort</button> 
                    <button className="button-3" onClick={this.handleClick}>quick-sort</button> 
                    <button className="button-3" onClick={this.handleClick}>bubble-sort</button> 
                     
                </div>
                <h4>{()=>(console.timeEnd("qwe"))}</h4>
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


