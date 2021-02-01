import React from 'react'

const Item = ({ items, click }) => {
  // console.log(items);
  return (
    <ul className="items">
      {items.map((item, index) => (
        <li className="item" key={index}>
          <img src={item.imageURL} alt="hi"/>
          <h2>{item.name}</h2>
          <div className="price">${item.price}</div>
          <div className="description">{item.description}</div>
          <button
            onClick={()=>click(item.name, item.price)}
            // onClick={()=>click(item)}
          >Add to Cart</button>
        </li>
      ))}
    </ul>
  );
}

export default Item;