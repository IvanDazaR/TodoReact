import React from "react";

// Personal Custom HooK to manage the local Storage
function useLocalStorage(itemName, initialValue){
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
       }catch {
        setError(error);
       }
      }, 2000);
    });
  
  
  
  
  
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
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

export {useLocalStorage};