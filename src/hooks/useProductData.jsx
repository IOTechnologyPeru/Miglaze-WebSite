import { useEffect, useState } from 'react';
import { Context } from '@src/Context';
import { useContext } from 'react';

export const useProductData = () => {
  const { products, setProducts } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function () {
    if (products.length === 0) {
      setLoading(true);

      window
        .fetch('https://miglaze-api.herokuapp.com/api/product')
        .then((res) => res.json())
        .then((products) => {
          setProducts(products);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return { error, loading, products };
};

export const insertProduct = (data) => {
  const { products, setProducts } = useContext(Context);
  
    fetch('https://miglaze-api.herokuapp.com/api/product', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then( response=> {
      console.log({response});
      return response.json();
    })
    .then(function (data) {
      console.log('data = ', data);
    })
    .catch(function (err) {
      console.error(err);
    });
};
