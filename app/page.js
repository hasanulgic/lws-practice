import Ad from "@/componets/Home/Ad";
import Banner from "@/componets/Home/Banner";
import Categories from "@/componets/Home/Categories";
import Features from "@/componets/Home/Features";
import NewArrival from "@/componets/Home/NewArrival";
import TrendingProducts from "@/componets/Home/TrendingProducts";

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <NewArrival />
      <Ad />
      <TrendingProducts />
    </>
  );
}
