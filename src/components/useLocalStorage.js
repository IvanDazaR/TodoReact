import React from "react";

// Personal Custom HooK to manage the local Storage
function useLocalStorage(itemName, initialValue){
    const [sincronizedItem, setSincronizedItem] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    // React Custom Hook with the initial value of the list
    const [item, setItem] = React.useState(initialValue);
  
    // UseEffect
    React.useEffect(() => {
      setTimeout(() => {
       try{
         // Get values in the local storage
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          // Set the list with an empty array if the localStorage doesn't exist
          if(!localStorageItem){
            // Coverts a JavaScript value to a JavaScript Obj
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem= JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
          setSincronizedItem(true);
       }catch {
        setError(error);
       }
      }, 3000);
    }, [sincronizedItem]);
  
  
  
  
  
  // Update the items and saved old items
      const saveItem = (newItem) => {
        try {
          const stringifiedItem = JSON.stringify(newItem);
          localStorage.setItem(itemName, stringifiedItem);
          setItem(newItem);
        } catch {
          setError(error);
        }
        
    };
    const sincronizeItem = () => {
      setLoading(true);
      setSincronizedItem(false);
    }
    return {
      item,
      saveItem,
      loading,
      error,
      sincronizeItem,
    };
  }

export {useLocalStorage};