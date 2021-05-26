import { useEffect, useState } from 'react';

export const useProductData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function () {
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
  }, []);

  return { error, loading, products };
};
