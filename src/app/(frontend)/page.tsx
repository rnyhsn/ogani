import Banner from "@/components/body/home/Banner";
import BlogSection from "@/components/body/home/BlogSection";
import FeaturedProducts from "@/components/body/home/FeaturedProducts";
import ProductBanner from "@/components/body/home/ProductBanner";
import ProductSlideSection from "@/components/body/home/ProductSlideSection";
import SliderProducts from "@/components/body/home/SliderProducts";


export default async function Home() {
  
  return (
      <div className="flex flex-col gap-14">
          <Banner />
          <SliderProducts />
          <FeaturedProducts />
          <ProductBanner />
          <ProductSlideSection />
          <BlogSection />
      </div>
  );
}
