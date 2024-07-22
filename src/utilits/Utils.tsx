export function textslice (text:string,max:number=10){
    if(text.length>=max){
        return` ${text.split(" ").slice(0,max).join(" ")}...`
    }else{return text}
}