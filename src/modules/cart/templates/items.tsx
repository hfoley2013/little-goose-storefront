import { LineItem, Region } from "@medusajs/medusa"
import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[]
  region?: Region
}

const ItemsTemplate = ({ items, region }: ItemsTemplateProps) => {
  return (
    <div>
      <div className="flex items-center pb-3 border-b border-gray-200">
        <h1 className="text-xl-semi">Shopping Cart</h1>
      </div>
      <div className="grid grid-cols-1 py-8 gap-y-8">
        {items && region
          ? items
            .sort((a, b) => {
              return a.created_at > b.created_at ? -1 : 1
            })
            .map((item) => {
              return <Item key={item.id} item={item} region={region} />
            })
          : Array.from(Array(5).keys()).map((i) => {
            return <SkeletonLineItem key={i} />
          })}
      </div>
    </div>
  )
}

export default ItemsTemplate