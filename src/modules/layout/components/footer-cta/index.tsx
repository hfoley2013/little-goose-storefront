import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const FooterCTA = () => {
  return (
    <div className="w-full bg-[#79aa9c]">
      <div className="relative flex flex-col-reverse justify-between py-16 content-container gap-y-8 small:flex-row small:items-center">
        <div className="text-white">
          <h3 className="text-2xl-semi">Shop our latest products</h3>
          <div className="mt-6">
            <UnderlineLink href="/store">Explore products</UnderlineLink>
          </div>
        </div>

        <div className="relative w-full aspect-square small:w-[35%] small:aspect-[28/36]">
          <Image
            src="/ravenna_cup_lifestyle.jpg"
            alt="A child takes a drink from the Ravenna Cup."
            className="absolute inset-0 rounded-lg"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
