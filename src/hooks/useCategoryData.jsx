import { useEffect, useState } from 'react';
import { Context } from '@src/Context';
import { useContext } from 'react';

export const useCategoryData = () => {
  const { categories, setCategories } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function () {
    if (categories.length === 0) {
      setLoading(true);
      window
        .fetch('https://miglaze-api.herokuapp.com/api/category')
        .then((res) => res.json())
        .then((categories) => {
          setCategories(categories);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return { error, loading, categories };
};
