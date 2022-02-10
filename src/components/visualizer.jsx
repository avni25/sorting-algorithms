import React from 'react';


class Visualizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr: []
        };
    }

    createRandomarr(len, from, to){
        let arr = [];
        for (let i = 0; i < len; i++) {
            let val = Math.floor(Math.random() * (to - from + 1) + from);
            arr.push(val);            
        }

        return arr;
    }


    render(){
        // let arr = this.state.arr;
        let arr = this.createRandomarr(100, 10, 500);
        return(
            <div className ="vis-container">                
                {arr.map((item, index) => (
                    <div className='bar' key={index} style={{
                        backgroundColor: '#33E9FF',
                        height: `${item}px`,
                        width: "5px", 
                    }}></div>
                ))}
                
            </div>
        );
    
    }

}

export default Visualizer;


