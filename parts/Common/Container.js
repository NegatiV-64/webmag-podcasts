import React from 'react';

const Container = (props) => {
    
    const containerClass = props.className ? `container ${props.className}` : "container"
    
    return (
        <div className={containerClass}>
            {props.children}
        </div>
    );
}

export default Container;
