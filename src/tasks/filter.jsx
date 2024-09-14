import { Component } from "react";
import axios from "axios";

import CustomDNALoader from "../loarder/loader";
import { Button } from "react-bootstrap";


 class DisplayProducts extends Component{
    state={
        products:[],
        categories:[],
        loading:true
    }
    componentDidMount(){
        this.display()
        this.filter()
      

    }

    display=async()=>{
       const {status,data}  =await axios.get('https://fakestoreapi.com/products')
   if(status===200){
    this.setState({
        products:data,
        loading:false
    })
   }
       
    }
    filter=async()=>{
        const{data} =await axios.get('https://fakestoreapi.com/products/categories')
       
        this.setState({
            categories:[...data,'all']
        })
    }
   
    clickselect=(selectedCategory)=>{
        if(selectedCategory==='all'){
        this.display()
       
        }
        else{
            this.category(selectedCategory)
        }
      
      
    }




   category=async(selected)=>{
    const{data} = await axios.get(`https://fakestoreapi.com/products/category/${selected}`)
    
    this.setState({
        products :data
    })
    
   }
    render(){
        return(
         
         <>
       
        

{
     this.state.loading?<CustomDNALoader/>   :<>
    
       {
         this.state.categories.map(each=>{
            return(
             <>
              <Button variant="primary" onClick={()=>this.clickselect(each)}>{each}</Button>
            
                        </>
                     )
                    }) 
       }
        

      
       </>
    }
                


        
         { 
           this.state.loading?<CustomDNALoader/>   :<>
          
         
              
             {
                
                this.state.products.map(each=>{
                    return(
                     <>
                      <h1>{each.id}</h1> 
                            <img src={each.image} height={150} width={150}/>
                            <p>{each.title}</p>
                            <p>{each.description}</p>
                            
    
                           
                       </>  
                           
                        
                    )
                })
                
            }
            
          
          </>
         }
         </>
        )
        
    }
   
}
export default DisplayProducts