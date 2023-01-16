import React from "react";
import '../styles/EmptyResults.scss';

function EmptySearchReasults ({ searchText }) {
    return (
        <div className="emptyResults-container">
            <p>No results for {searchText}</p>
            <p>¯\_(ツ)_/¯</p>
        </div>
    );
}

export { EmptySearchReasults };