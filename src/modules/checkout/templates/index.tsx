import { CheckoutProvider } from "@lib/context/checkout-context"
import ChevronDown from "@modules/common/icons/chevron-down"
import Link from "next/link"
import CheckoutLoader from "../components/checkout-loader"
import CheckoutForm from "./checkout-form"
import CheckoutSummary from "./checkout-summary"
import Image from "next/image"

const CheckoutTemplate = () => {
  return (
    <CheckoutProvider>
      <div className="relative bg-gray-100 small:min-h-screen">
        <div className="h-16 bg-white">
          <nav className="flex items-center justify-between h-full content-container">
            <Link
              href="/cart"
              className="flex items-center flex-1 text-gray-700 uppercase text-small-semi gap-x-2 basis-0"
            >
              <>
                <ChevronDown className="rotate-90" size={16} />
                <span className="hidden mt-px small:block">
                  Back to shopping cart
                </span>
                <span className="block mt-px small:hidden">Back</span>
              </>
            </Link>
            <Link href="/" className="text-xl-semi">
              <Image
                src={"/little_goose_logo_inverted.svg"}
                alt="Little Goose Logo"
                draggable={false}
                width={60}
                height={60}
                style={{
                  objectFit: "contain",
                  objectPosition: "",
                }}
              />
            </Link>
            <div className="flex-1 basis-0" />
          </nav>
        </div>
        <div className="relative">
          <CheckoutLoader />
          <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] gap-y-8 content-container gap-x-8 py-12">
            <CheckoutForm />
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </CheckoutProvider>
  )
}

export default CheckoutTemplate
