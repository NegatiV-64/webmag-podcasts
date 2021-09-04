import React from 'react';

const Main = (props) => {

    const classes = props.className ? `main ${props.className}` : `main`;

    return (
        <main className={classes}>
            {props.children}
        </main>
    );
}

export default Main;
