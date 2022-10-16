import React from 'react';
import "./Circle.css"
function Circle(props) {
    const {item} = props
    return (
        <div className='dot'>
            <div className="name">
                {item.charAt(0)}
            </div>
        </div>
    );
}

export default Circle;