import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Counter from './Counter/Counter';

const counterList = (props) => {
    let total = 0;
    return(
        <Aux>
            <div className="sp-app__list">

                {props.list.map((item, index) =>{
                    total+=item.count;
                    return <Counter 
                    key={index}
                    id={index}
                    title={item.title} 
                    count={item.count} 
                    delete={() => props.delete(index)}
                    counter={props.counter}
                    />
                })}
                
            </div>


            <div className="sp-app__total">Total Count : {total}</div>
        </Aux>
    );

}

export default counterList;