import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12 md:px-6">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2 mb-2">
            <Image src="/logo.png" alt="Caretta Hospitality Logo" width={32} height={32} />
            <span className="font-bold font-headline text-lg">
              Caretta Hospitality
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Your trusted partner for memorable stays, delicious meals, and
            exceptional service.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold font-headline">Quick Links</h3>
          <Link href="#services" className="text-sm hover:text-primary">
            Services
          </Link>
          <Link href="#cottage" className="text-sm hover:text-primary">
            Cottage in Manali
          </Link>
          <Link href="#testimonials" className="text-sm hover:text-primary">
            Testimonials
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold font-headline">Contact Us</h3>
          <a
            href="https://maps.google.com/?q=ALT+F,+Ground+Floor,+Plot+No.+21+%26+21A,+Sector+142,+Noida,+Uttar+Pradesh+201304"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm hover:text-primary"
          >
            <MapPin className="h-4 w-4 mt-1 shrink-0" />
            <span>
              ALT F, Ground Floor, Plot No. 21 & 21A, Sector 142, Noida, Uttar
              Pradesh 201304
            </span>
          </a>
          <a
            href="tel:+919810021676"
            className="flex items-center gap-2 text-sm hover:text-primary"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span>+91 98100 21676</span>
          </a>
          <a
            href="mailto:info@carettahospitality.com"
            className="flex items-center gap-2 text-sm hover:text-primary"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span>info@carettahospitality.com</span>
          </a>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex items-center justify-center py-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Caretta Hospitality. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
