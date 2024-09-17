import React from 'react'
import ProductBlogCard from './ProductBlogCard'

const BlogSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28">
        <h1 className="text-center text-4xl font-extrabold mb-4">From The Blog</h1>
        <div className="h-1 bg-primary w-20 mx-auto"></div>
        <div className="grid grid-cols-3 gap-5 mt-10">
        <ProductBlogCard />
        <ProductBlogCard />
        <ProductBlogCard />
        </div>
    </div>
  )
}

export default BlogSection
