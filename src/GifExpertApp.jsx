import { useState } from "react";
import { AddCategory , GifGrid } from "./components/index";

const GifExpertApp = () => {
  const [categories, setcategories] = useState(['Anime']);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;

    
    setcategories([value,...categories])
  }
  
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        onNewCategory = { (value) => onAddCategory(value)}
      />
      
{
  categories.map((element) => (
  <GifGrid 
  element={element} 
  key={element}
  />
    )
  )
}

    </>
  )
}

export default GifExpertApp;
