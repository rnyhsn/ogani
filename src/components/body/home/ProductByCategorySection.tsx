import { featuredProducts } from "@/utils/data"
import ProductCard from "./ProductCard"


const ProductByCategorySection = ({category}: {category: string}) => {
  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-10 mt-10">
    {
        featuredProducts.map((item, index) => (
            category === 'all' ? (
                <ProductCard item={item} key={index} offer={false}/>
            ) : (
                category === item.category && <ProductCard item={item} key={index} offer={false} />
            )
        ))
    }
    </div>
  )
}

export default ProductByCategorySection
