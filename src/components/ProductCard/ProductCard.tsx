import { textslice } from "../../utilits/Utils";
import Button from "../Ui/Button/Button";
import ImageComp from "../Ui/Image/ImageComp";
import { IProduct } from './../../Interface/Interface';
interface IProps {
  product:IProduct
}
export default function ProductCard({ product }: IProps) {
  const  {imgUrl,titleName,dscreptions,price} = product;
  return (
    <>
      <div className=" max-w-sm md:max-w-lg mx-auto flex flex-col border rounded-md p-5 hover:border-green-500 duration-500   ">
        <ImageComp
          imageUrl={imgUrl}
          className={"w-full object-cover mb-2 mx-auto rounded-md"}
          alt={titleName ? textslice(titleName,5) : "product Image"}
        />
        <h2 className=" mb-2 font-bold  text-green-700">{textslice(titleName,2)}</h2>
        <p className=" from-neutral-400 ">
          { textslice(dscreptions,15)}
        </p>
        <div className=" flex my-3 space-x-3   ">
          <span className=" h-5 w-5 rounded-full bg-red-400  "></span>
          <span className=" h-5 w-5 rounded-full bg-sky-400  "></span>
          <span className=" h-5 w-5 rounded-full bg-green-400  "></span>
          <span className=" h-5 w-5 rounded-full bg-blue-400  "></span>
        </div>
        <div className="flex justify-between items-center">
          <span>{price}$</span>
          <ImageComp
            imageUrl={imgUrl}
            className={"h-10 w-10 rounded-full object-bottom"}
            alt=" product emage"
          />
        </div>
        <div className="flex justify-between items-center space-x-2 my-3 ">
          <Button onClick={()=>{console.log("gi");
          }} className={"bg-green-500  hover:bg-green-700"} width={"w-full"}  > Edit </Button>

          <Button className={"bg-red-500   hover:bg-red-800"}width={"w-full"} onClick={()=>{console.log("hi");
          }} >
            delete
          </Button>
        </div>
      </div>
    </>
  );
}
