import React from "react";
const NoResultsDiv = () => {
    return (
        <div className="no-results">
            <img src="icons/no-result.svg" alt="No Results Found" className="icon"/>
            <h3 className="no-results-text">No results found</h3>
        </div>
    );
};

export default NoResultsDiv