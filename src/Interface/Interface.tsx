export interface IProduct {
    id:string|undefined,
    titleName:string,
    dscreptions:string,
    imgUrl:string,
    color?:string[],
    price:string,
    category?:{
        name:string,
        imgUrl:string,
    }
}