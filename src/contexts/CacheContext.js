import { createContext, useState } from "react";

const CacheContext = createContext({});

export default CacheContext;

export const CacheProvider = ({children}) => {
  const [cache, setCache] = useState([]);

  const getFromCache = (id) => cache.find((obj) => obj.id === id);

  const isInCache = (id) => cache.some((obj) => obj.id === id);

  const addToCache = (obj) => {
    if(isInCache) {
      console.warn('Obj already saved');
      return;
    }
    setCache([...cache, obj]);
  }

  const valueToShare = {
    getFromCache,
    isInCache,
    addToCache
  }
  return (
    <CacheContext.Provider value={valueToShare}>
      {children}
    </CacheContext.Provider>
  )
}