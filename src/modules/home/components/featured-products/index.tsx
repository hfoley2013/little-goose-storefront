"use client"

import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="py-12">
      <div className="py-12 content-container">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="mb-6 text-gray-600 text-base-regular">
            Latest products
          </span>
          <p className="max-w-lg mb-4 text-gray-900 text-2xl-regular">
            Our newest products are here to help.
          </p>
          <UnderlineLink href="/store">Explore products</UnderlineLink>
        </div>
        <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
          {data
            ? data.map((product) => (
              <li key={product.id}>
                <ProductPreview {...product} />
              </li>
            ))
            : Array.from(Array(4).keys()).map((i) => (
              <li key={i}>
                <SkeletonProductPreview />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProducts
