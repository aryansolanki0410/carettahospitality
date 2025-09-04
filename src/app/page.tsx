import Image from "next/image";
import {
  Home as HomeIcon,
  UtensilsCrossed,
  Building,
  HeartHandshake,
  School,
  Briefcase,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { CuisineExplorer } from "@/components/cuisine-explorer";

export default function Home() {
  const testimonials = [
    {
      quote:
        "Our cottage stay in Manali was a dream come true. The views were breathtaking and the hospitality was exceptional. A truly memorable experience!",
      name: "Anjali P.",
      location: "Mumbai",
    },
    {
      quote:
        "Caretta's tiffin service is a lifesaver for a busy professional. The food is consistently delicious, healthy, and feels like a home-cooked meal. Highly recommended!",
      name: "Rohan S.",
      location: "Gurugram",
    },
    {
      quote:
        "They completely revitalized our office canteen. The food quality and variety are outstanding, and our employees have never been happier.",
      name: "Priya K., HR Manager",
      location: "Noida",
    },
    {
      quote:
        "The attention to detail during our Manali cottage stay was impeccable. It was the perfect Himalayan retreat for our family. We can't wait to return.",
      name: "The Sharma Family",
      location: "Delhi",
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section
          id="hero"
          className="relative w-full h-[80vh] min-h-[450px] md:min-h-[500px] flex items-center justify-center text-center"
        >
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Breathtaking mountain landscape view from a Caretta Hospitality cottage in Manali"
            data-ai-hint="mountain landscape"
            fill
            className="object-cover -z-10 brightness-50"
            priority
          />
          <div className="container px-4 md:px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-4">
              Caretta Hospitality
            </h1>
            <p className="max-w-[700px] mx-auto text-base md:text-xl font-body mb-8">
              Exquisite Stays in Manali, Healthy Tiffin Services in Delhi NCR, and Professional Canteen Solutions.
            </p>
            <Button size="lg" asChild>
              <a href="#services">Explore Our Services</a>
            </Button>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold">
                Our Premier Hospitality Services
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                From serene mountain getaways and nourishing daily meals to comprehensive canteen management, we deliver hospitality excellence.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/20 text-primary rounded-full p-4 w-fit">
                    <HomeIcon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline mt-4 text-xl md:text-2xl">
                    Luxury Cottages in Manali
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Discover tranquility and luxury at our picturesque cottages, nestled in the heart of the Himalayas for an unforgettable stay.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/20 text-primary rounded-full p-4 w-fit">
                    <UtensilsCrossed className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline mt-4 text-xl md:text-2xl">
                    Tiffin Services in Delhi NCR
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Enjoy healthy, homely, and delicious meals delivered to your doorstep. Perfect for individuals and corporate clients.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/20 text-primary rounded-full p-4 w-fit">
                    <Building className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline mt-4 text-xl md:text-2xl">
                    Corporate Canteen Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Expert canteen management for offices, hospitals, and schools, offering diverse and high-quality culinary options.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        <section id="cottage" className="w-full py-12 md:py-24">
          <div className="container mx-auto grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold tracking-tight">
                Your Luxury Sanctuary in Manali
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Escape to our charming cottage, a perfect blend of modern comfort and rustic elegance. Enjoy stunning valley views, cozy interiors, and personalized service that makes you feel right at home. Your perfect Himalayan adventure starts here.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Spectacular Himalayan Views from Every Room</li>
                <li>Fully Equipped Kitchen & Modern Amenities</li>
                <li>Cozy Fireplace and Private Outdoor Seating</li>
                <li>Prime Location Near Solang Valley & Rohtang Pass</li>
              </ul>
            </div>
            <Carousel className="w-full max-w-sm md:max-w-md mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="https://picsum.photos/600/400?random=1"
                    alt="Exterior of a beautiful cottage in Manali with mountain backdrop"
                    data-ai-hint="cottage exterior"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover aspect-[3/2]"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="https://picsum.photos/600/400?random=2"
                    alt="Cozy living room with a warm fireplace in a Manali cottage"
                    data-ai-hint="cozy living room"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover aspect-[3/2]"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="https://picsum.photos/600/400?random=3"
                    alt="Comfortable bedroom with a stunning view of the mountains"
                    data-ai-hint="bedroom view"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover aspect-[3/2]"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-[-10px] md:left-[-50px]" />
              <CarouselNext className="right-[-10px] md:right-[-50px]" />
            </Carousel>
          </div>
        </section>
        
        <Separator />

        <section
          id="tiffin-canteen"
          className="w-full py-12 md:py-24 bg-card"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold">
                Nourishing Delhi NCR with Quality Meals
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Bringing culinary excellence, hygiene, and convenience to your workplace and home with our tiffin and canteen services.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-headline font-semibold">
                  Healthy Tiffin Services
                </h3>
                <p className="text-muted-foreground">
                  Enjoy the convenience of delicious, home-style meals without the hassle. Our tiffin service is the perfect solution for corporate employees and individuals seeking reliable, tasty, and hygienic food.
                </p>
                <div className="flex justify-center md:justify-start gap-4 pt-2">
                  <div className="p-4 border rounded-lg">
                    <p className="font-semibold">Corporate Plans</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="font-semibold">Individual Plans</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-headline font-semibold">
                  Institutional Canteen Management
                </h3>
                <p className="text-muted-foreground">
                  We provide end-to-end canteen and cafeteria solutions, offering a wide variety of cuisines to suit every palate. We partner with:
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="text-accent" />
                    <span>Corporate Offices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <School className="text-accent" />
                    <span>Schools & Colleges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartHandshake className="text-accent" />
                    <span>Hospitals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-explorer" className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold">
                AI-Powered Cuisine Explorer
              </h2>
              <p className="text-muted-foreground mt-2">
                Need inspiration for your next corporate event or daily meal? Let our AI tool suggest the perfect menu from our diverse offerings based on your preferences.
              </p>
            </div>
            <CuisineExplorer />
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 bg-card"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground mt-2">Hear from our satisfied customers across India.</p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col justify-between text-left">
                        <CardContent className="pt-6">
                          <div className="flex text-yellow-400 mb-2">
                            <Star /><Star /><Star /><Star /><Star />
                          </div>
                          <p className="italic">"{testimonial.quote}"</p>
                        </CardContent>
                        <CardHeader>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.location}
                          </p>
                        </CardHeader>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-[-10px] md:left-[-50px]" />
              <CarouselNext className="right-[-10px] md:right-[-50px]" />
            </Carousel>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24">
          <div className="container mx-auto text-center px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold">Contact Us Today</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              We'd love to hear from you. Contact us for Manali cottage bookings, tiffin service orders, or inquiries about our canteen management solutions.
            </p>
            <Button size="lg" className="mt-6" asChild>
              <a href="mailto:info@carettahospitality.com">Email Us for a Quote</a>
            </Button>
          </div>
        </section>

      </main>
    </div>
  );
}
