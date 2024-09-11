export const Image=(props)=>{
    const{vidya,height, width}=props
    return(
       <img src={vidya} height={height} width={width}/>
    )
}