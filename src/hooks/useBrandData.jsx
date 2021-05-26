import { useEffect, useState } from 'react';
import { Context } from '@src/Context';
import { useContext } from 'react';

export const useBrandData = () => {
  const { brands, setBrands } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function () {
    if (brands.length === 0) {
      setLoading(true);
      window
        .fetch('https://miglaze-api.herokuapp.com/api/brand')
        .then((res) => res.json())
        .then((brands) => {
          setBrands(brands);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return { error, loading, brands };
};
