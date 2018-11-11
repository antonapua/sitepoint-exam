import React from 'react';

const Counter = (props) => {
    return(
        <div className="sp-app__item">
            <div className="sp-app__item-button sp-app__item-button--close" onClick={props.delete}>x</div>
            <div className="sp-app__item-title">{props.title}</div>
            <div className="sp-app__item-button sp-app__item-button--minus" onClick={() => props.counter(props.id,'dec')}>-</div>
            <div className="sp-app__item-count">{props.count}</div>
            <div className="sp-app__item-button" onClick={() => props.counter(props.id,'inc')}>+</div>
        </div>
    )
};

export default Counter;