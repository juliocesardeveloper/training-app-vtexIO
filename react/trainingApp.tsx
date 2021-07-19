import React,  {useContext, useEffect } from 'react'
import { ProductContext } from 'vtex.product-context'


type Props = {
  name: string,
  age: number
}

function trainingApp({ name, age }: Props) {

  const productInfo = useContext(ProductContext);

  useEffect(()=> {
    console.log("productInfo useEffect",productInfo)
  },[])

  return <div>Hey, {name}, tengo {age} años</div>
}

export default trainingApp
