import React from 'react';
import NewFilter from "@/NewFilter";

const FilterList = () => {
    return (
        <ul className="filters">
            <NewFilter />
            <NewFilter />
            <NewFilter />
            <NewFilter />
        </ul>
    );
};

export default FilterList;