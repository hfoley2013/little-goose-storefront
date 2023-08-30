import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white small:text-left small:justify-end small:items-start small:p-32 xl:text-black">
        <h1 className="mb-4 text-2xl-semi drop-shadow-md shadow-white">
          Introducing the Ravenna Cup!
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-white">
          Discover top-quality toddler products at our store. From training cups to educational toys - we&apos;re here to make parenting a joyful journey.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <Image
        src="/hero_image.png"
        loading="eager"
        priority={true}
        quality={90}
        alt="Mom and toddler drinking from the Ravenna Cup."
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default Hero
