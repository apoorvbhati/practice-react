import React from "react";

const Item = ({name, category}) => {
    return (
        <div>
            {name}
            {category}
        </div>
    );
}

export default Item;