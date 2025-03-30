import Benefits from "@/screens/Benefits/Benefits";
import Hero from "@/screens/Hero/Hero";
import AboutPreview from "@/screens/About/About";
import Testimonials from "@/screens/Testimonials/Testimonials";
import FeaturedBlogPosts from "@/screens/FeaturedBlogPosts/FeaturedBlogPosts";
import FAQPreview from "@/screens/FAQPreview/FAQPreview";
import CallToAction from "@/screens/CTA/CallToAction";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <AboutPreview/>
      <Testimonials/>
      <FeaturedBlogPosts/>
      <FAQPreview/>
      <CallToAction/>
      <Footer/>
    </main>
  );
}
