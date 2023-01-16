import React from "react";
import '../styles/Second.scss';

function Second({children, loading}){

    return(
        <div className="second">
            {
                React.Children
                    .toArray(children)
                    .map(child => React.cloneElement(child, { loading }))
            }
        </div>
    );
}
export {Second};