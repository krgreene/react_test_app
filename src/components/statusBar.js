import React from 'react';

function StatusBar(props) {

    return(
        <div className='statusBar'>
            {props.status}
        </div>
    )
}

export default StatusBar;