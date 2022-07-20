import React, { Fragment, useState, useMemo, useEffect } from "react";

import Item from "./item";

const ShopList = () => {
    var defaultSports = [
        { name: "Table Tennis", category: "Indoor" },
        { name: "Football", category: "Outdoor" },
        { name: "Swimming", category: "Aquatics" },
        { name: "Chess", category: "Indoor" },
        { name: "BaseBall", category: "Outdoor" }
    ];

    const [sportList, setSportList] = useState(defaultSports);
    const [selectedCategory, setSelectedCategory] = useState(); 

    // useEffect(() => {
    //     setSportList(defaultSports);
    //     console.log('useEffect running');
    // }, []);

    const getFilteredList = () => {
        if(!selectedCategory) {
            // console.log('returning the default value');
            return sportList;
        }
        // console.log('filtering the items');
        // console.log(sportList);
        return sportList.filter((item) => item.category === selectedCategory)
    }
    
    var filteredItems = useMemo(getFilteredList, [selectedCategory, sportList]);

    const changeHandler = (event) => {
        setSelectedCategory(event.target.value);
    }

    // console.log(filteredItems);

    return (
        <Fragment>
            <label for="items">Filter by category: </label>
            <select name="items" id="shop_items" onChange={changeHandler}>
                <option value="">All</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Indoor">Indoor</option>
                <option value="Aquatics">Aquatics</option>
            </select>
            <br/>
            {filteredItems.map((sport, index) => <Item key={index} {...sport} /> )}
        </Fragment>
    );
}

export default ShopList;