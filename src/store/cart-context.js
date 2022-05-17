import { createContext, useState } from 'react';

const CartContext = createContext({
  products: [],
  addProduct: () =>{},
  removeProduct: () => {},
  clear: () => {},
  isInCart: () => {},
 

});



export const CartContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const addProduct = (product) => {
    const repeatedItemIndex = productList.findIndex(item => item.id === product.id)
    if (repeatedItemIndex !== -1) {
      setProductList(productList.map(p => p.id === product.id ? {...p, quantity: p.quantity + product.quantity} : p));
    } else {
      setProductList([product, ...productList]);
    }
  }

  
  const removeProduct = (id) => {
  const indexToRemove = productList.findIndex(item => item.id === id);
    if (productList[indexToRemove].quantity === 1) {
      setProductList(productList.filter(i => i.id !== id))
    } else {
      setProductList(productList.map(p => p.id === id ? {...p, quantity: p.quantity - 1} : p));
    }
  }

  const clear = () => {
    setProductList([]);
  }

  const isInCart = (id) => {
    return productList.map(p => p.id).indexOf(id) !== -1;
  }

  const totalCount = () => {
    return productList.reduce((total, value) => {
        return total + value.quantity
    }, 0)
  }

  const totalPrice = () => {
    return productList.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const unitsProduct = (id) => {
    const foundInCart = productList.find((item) => item.id === id);
    return foundInCart ? foundInCart.quantity : 0;
  };

  const deleteById = (id) => {
    setProductList(productList.filter((item) => item.id !== id));
  };




 


  return (
    <CartContext.Provider value={{
      products: productList,
      addProduct: addProduct,
      removeProduct,
      clear,
      isInCart,
      totalCount,
      totalPrice,
      unitsProduct,
      deleteById

    

    }}>
      {children}
    </CartContext.Provider>
  )
}


export default CartContext;