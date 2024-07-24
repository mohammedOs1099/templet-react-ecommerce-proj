import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import { productList } from "./Data/Data";
import Modal from "./components/Ui/Modal/Modal";
import Button from "./components/Ui/Button/Button";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  
  return (
    <>
      <main className="container mx-auto lg:px-28">
        <header className="flex items-center justify-between p-2 mb-5">
          <Button
            className={"bg-green-500 p-2   hover:bg-green-800"}
            width={"w-fit"}
            onClick={() => {
              open()
            }}
          >
            Add new Product
          </Button>
          <h1 className="font-bold mx-auto   text-center   text-3xl text-green-700  ">
            All Products...
          </h1>
        </header>

        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2  p-2  ">
          {productList.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        <Modal title={"Add new Product ..."} closeModal={()=>{close()}} isOpen={isOpen}>
          <div className="btns flex items-center justify-center gap-3">
          <Button
            className={"bg-green-500 p-2   hover:bg-green-800"}
           
            onClick={() => {
             console.log("hi");
             
            }}
          >
            Add new Product
          </Button>
          <Button
            className={"bg-gray-500 p-2   hover:bg-gray-600"}
            
            onClick={() => {
              close()
            }}
          >
           cancel
          </Button>
          </div>
        </Modal>
      </main>
    </>
  );
}

export default App;
