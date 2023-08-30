import CartTemplate from "@modules/cart/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "View your shopping cart",
}

export default function Cart() {
  return <CartTemplate />
}
