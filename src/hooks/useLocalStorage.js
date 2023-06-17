import { useEffect, useRef } from 'react';

export const useLocalStorage = () => {
  const getId = () => {
    if (localStorage.getItem('id') === null) {
      localStorage.setItem('id', 0);
    } else {
      return parseInt(localStorage.getItem('id'));
    }
  };

  //Have to been created first
  const getItems = () => {
    const data = [];
    const length = parseInt(localStorage.getItem('id'));

    for (let i = 0; i <= length; i++) {
      const res = localStorage.getItem(i);

      if (res === null) {
        continue;
      }

      data.push(res);
    }

    return data;
  };

  const deleteItem = (id) => {
    localStorage.removeItem(id);
  };

  const getItemsRef = useRef(getItems());

  useEffect(() => {
    getId();
    getItemsRef;
  }, []);

  const GetNextId = () => {
    const NextId = parseInt(localStorage.getItem('id')) + 1;
    localStorage.setItem('id', NextId);
  };

  const SetItem = (item) => {
    const id = getId();

    if (item != '') {
      const jsonItem = `{"id": ${id}, "text" : "${item}"}`;

      try {
        localStorage.setItem(id, jsonItem);
        GetNextId();
        getItemsRef;
        console.log(jsonItem);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return [SetItem, getItems, deleteItem];
};
