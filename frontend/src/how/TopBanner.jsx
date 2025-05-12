import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="bg-pink-200 text-white  py-2 px-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex justify-between items-center">
          Enjoy Free Shipping For Orders Over $30!{" "}
          <a href="#" className="underline">
            Shop Now
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <a href="#" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter size={18} />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="#" aria-label="YouTube">
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
