import React from 'react';
import Aux from '../../hoc/Aux';

const layout = ( props ) => (
    <Aux>
        <div className="sp-app__action">
            <input 
                type="text" 
                className="sp-app__action-text"
                onChange={props.change}
            />
            <button onClick={props.click} className="sp-app__action-button">+</button>
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;