import React, { createContext, useState } from 'react';
export const Context = createContext();

const Provider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const value = {
    categories,
    setCategories,
    brands,
    setBrands,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
