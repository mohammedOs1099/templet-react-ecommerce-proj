import { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes <HTMLButtonElement>{
    className?:string,
    children:ReactNode,
    width?:"w-full"| "w-fit"

}

export default function Button({className,children,width="w-full",...rest}:IProps) {
    

    return (
        <>
        <button  className={`${className} duration-500  rounded-md text-white p-1 ${width} `} {...rest}>{children}</button>
            
        </>
    )
}
