interface IProps{
    imageUrl:string,
    className:string
    alt:string

}

export default function ImageComp({imageUrl,className,alt}:IProps) {
    
    

    return (
        <>
        <img src={imageUrl}  className={className} alt={alt} />
            
        </>
    )
}
