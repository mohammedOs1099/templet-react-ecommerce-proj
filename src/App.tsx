import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard/ProductCard';
import { productList } from './Data/Data';

function App() {
// const [image1]=useState("https://plus.unsplash.com/premium_photo-1671135590215-ded219822a44?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
// const [image2]=useState("https://plus.unsplash.com/premium_photo-1671135590215-ded219822a44?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

// const [image3]=useState("https://plus.unsplash.com/premium_photo-1689327920989-46ae447a2f01?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
// const [image4]=useState("https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
  return (
    <>
    <main className='container mx-auto lg:px-28'>
  <h1 className='font-bold  h-1 text-center m-5  text-3xl text-green-700 mb-16 '>All Products...</h1>

<div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2   ">
{productList.map((x)=><ProductCard product={x}/> )}


</div>
  
  </main>
  </>)
}

export default App
