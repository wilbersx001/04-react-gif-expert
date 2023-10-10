import {useState} from 'react'
import { AddCategory, GifGrid  } from './components';


export const GiftExpertApp = () => {
  

  const [categories, setCategories] = useState([ 'Gifs']);
  
 
  // const showAlert = () => {
  //   alert('Esto es una alerta!');
  // };

  const onAddCategory = (newCategory) => {
    if( categories.includes(newCategory)){
      window.alert('Esta palabra ya existe');
    } else  {
      console.log(newCategory)
      setCategories([ newCategory, ...categories])
    }
   
    // categories.push(newCategory);
    
  }

  return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory 
          onNewCategory={ (value) => onAddCategory(value)}
          currentCategories={categories}
        />
     
          {categories.map((category) => (
          <GifGrid 
            key={category} 
            category={category} 
            
          /> 
        ))}
       

    </>
  )
}
