import React from 'react';
import {createRandomarr, mergeSort, quicksort} from '../algorithms/sortinAlgos.js';

let ARRAY_LEN = 200;
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
        console.time("qwe");
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
                arr: quicksort(this.state.arr).reverse()                
            });            
        }else if(val === 'bubble-sort'){
            
            this.setState({
                ...this.state,
                arr: mergeSort(this.state.arr).reverse()                
            });            
        }

        
    }

    






    render(){
        
        return(
            <div > 
                <div className="menu-container">
                    <button onClick={this.handleClick}>new-array</button> 
                    <button onClick={this.handleClick}>merge-sort</button> 
                    <button onClick={this.handleClick}>quick-sort</button> 
                    <button onClick={this.handleClick}>bubble-sort</button> 
                     
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


