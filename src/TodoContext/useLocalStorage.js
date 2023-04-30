import React from "react";

function useLocalStorage(itemName, initialValue){

    const [loading, setloading] = React.useState(true);
    const [error, setError] = React.useState();
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const locaStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if(!locaStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(locaStorageItem);
          }      
  
          setItem(parsedItem);
          setloading(false);        
        } catch (error) {
          setError(error)
        }
  
      }, 1000);
    })
  
    const saveItem = (newTodos) => {
      try {
        localStorage.setItem(itemName,JSON.stringify(newTodos));
        setItem(newTodos);      
      } catch (error) {
        setError(error)
      }
  
    }
  
    return { 
      item,
      saveItem,
      loading,
      error
    }
  
}

export {useLocalStorage};