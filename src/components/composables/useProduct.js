import {ref} from "vue"
const productList= ref([])

export function useProduct(){
    const addProduct= (product)=>{
     productList.value.push(product);
    };
    const getProduct = ()=>{
    return productList.value;
    };
    return {addProduct , getProduct }
}