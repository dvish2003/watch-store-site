// app/page.js
import HeroPage from "./hero/page";
import ProductPage from "./featureProduct/page";
import FeatureProduct from "./featureProduct/page";
import TestimonialsPage from "./testimonials/page";
import NewsLetter from "./newsLetter/page";
import ArtOfTime from "./artOftime/page";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
      <section >
        <Navbar />
        <HeroPage />
        <ProductPage />
        <ArtOfTime />
        <FeatureProduct />
        <TestimonialsPage />
        <NewsLetter />
      </section>
  );
}
