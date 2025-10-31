"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Calendar, ChefHat, Sparkles, Star, Utensils, Fish, Cake, Wine } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Menu", id: "feature" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" },
            { name: "Location", id: "footer" }
          ]}
          brandName="Bella Vista"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Authentic Italian Dining Experience"
          description="Savor traditional flavors crafted with passion in an elegant atmosphere that celebrates the art of Italian cuisine"
          tag="Fine Dining"
          tagIcon={Sparkles}
          buttons={[
            { text: "Reserve Table", href: "contact" },
            { text: "View Menu", href: "feature" }
          ]}
          imageSrc="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant restaurant interior with warm lighting"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We bring generations of Italian culinary tradition to every dish, creating memorable dining experiences where authentic flavors meet modern elegance in the heart of the city"
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Meet Our Chef", href: "team" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Signature Specialties"
          description="Discover our carefully curated menu featuring the finest Italian traditions"
          tag="Menu Highlights"
          tagIcon={ChefHat}
          features={[
            {
              title: "Handmade Pasta",
              description: "Fresh pasta made daily using traditional techniques passed down through generations",
              icon: Utensils
            },
            {
              title: "Fresh Seafood",
              description: "Locally sourced seafood prepared with authentic Mediterranean flavors and techniques",
              icon: Fish
            },
            {
              title: "Artisan Desserts",
              description: "Exquisite desserts crafted by our pastry chef using traditional Italian recipes",
              icon: Cake
            },
            {
              title: "Wine Selection",
              description: "Carefully curated wine collection featuring the finest Italian and international vintages",
              icon: Wine
            }
          ]}
          buttons={[
            { text: "Full Menu", href: "#menu" },
            { text: "Wine List", href: "#wine" }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Experience the warmth and excellence that keeps our guests coming back"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Food Critic",
              company: "Culinary Digest",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9853292/pexels-photo-9853292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson",
              testimonial: "Exceptional dining experience with authentic Italian flavors. The handmade pasta and wine selection are outstanding."
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Restaurant Reviewer",
              company: "City Eats",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1850625/pexels-photo-1850625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen",
              testimonial: "Bella Vista delivers an unforgettable culinary journey. The attention to detail and quality is remarkable."
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Featured In"
          description="Recognized by leading culinary publications and dining guides"
          logos={[
            "https://images.pexels.com/photos/18424851/pexels-photo-18424851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/34450955/pexels-photo-34450955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/34450955/pexels-photo-34450955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/34450955/pexels-photo-34450955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18424851/pexels-photo-18424851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1656225/pexels-photo-1656225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18424851/pexels-photo-18424851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reservations"
          tagIcon={Calendar}
          title="Reserve Your Table Today"
          description="Experience authentic Italian dining in an elegant atmosphere. Book your table and let us create an unforgettable evening for you."
          inputPlaceholder="Your email address"
          buttonText="Book Table"
          termsText="By booking, you agree to our reservation policy and terms of service."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Bella Vista"
          columns={[
            {
              items: [
                { label: "Menu", href: "feature" },
                { label: "Reservations", href: "contact" },
                { label: "Events", href: "#events" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Chef", href: "#chef" },
                { label: "Reviews", href: "testimonial" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Location", href: "#location" },
                { label: "Hours", href: "#hours" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}