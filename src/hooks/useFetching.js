import React from 'react';

export const useFetching = (callback) => {
  let [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(true);
      console.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
