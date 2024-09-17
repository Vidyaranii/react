import {DNA} from "react-loader-spinner"
const CustomDNALoader =()=>{
    return(
       <>
       <h1>hello</h1>
        <DNA
        
            visible={true}
            height="120"
            width="120"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            />
            </>)
          
}
export default CustomDNALoader