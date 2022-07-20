import React from 'react';
import axios from 'axios';

import { useState } from 'react';

const Base_URL = "https://jsonplaceholder.typicode.com/posts";

const Axios_demo = () => {
    const [items, setItems] = useState([]);

    axios.get(Base_URL).then(res => setItems(res.data));

    return (
        <ul>
            {items.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    );
}

export default Axios_demo;