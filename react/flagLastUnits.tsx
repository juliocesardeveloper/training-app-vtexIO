import React,  {useContext, useEffect } from 'react'
import { ProductContext } from 'vtex.product-context'
import { useQuery } from 'react-apollo'
import getInventory from './GraphQL/query.getInventory.gql'
import { useCssHandles } from 'vtex.css-handles'


const CSS_HANDLES = [
  "wrapper-flagLastUnit",
  "EstaEsOtraClase"
] as const

//RENDERIZA EL TAG DE ULTIMAS UNIDADES
function flagLastUnit() {
  const productInfo : any = useContext(ProductContext);
  const { handles } = useCssHandles(CSS_HANDLES)

  const {data: inventoryData} = useQuery(getInventory,{
    variables:{
      sku: Number.parseInt(productInfo?.selectedItem?.itemId) || null
    }
  })

  useEffect(()=> {

      console.log("inventoryData",inventoryData)
     

  },[inventoryData])

  return <div className={`${handles['wrapper-flagLastUnit']}`}>Aqui renderizo un tag</div>
}

export default flagLastUnit
