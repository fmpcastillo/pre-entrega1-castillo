import React from "react";

const ItemSaludo = ({texto}) => {
  return <p>{texto}</p>;   
};


function ItemListContainer() {
  const containerStyle = {
    backgroundColor: 'grey',
    padding: '20px',
    border: '1px ',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}> 
     <ItemSaludo texto="Bienvenido a nuestro e-comerce"></ItemSaludo>
    </div>
  );
}


export default ItemListContainer;