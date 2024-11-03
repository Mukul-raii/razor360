
import { Facebook, Linkedin } from "lucide-react"

export default function Component() {
  return (
    <footer   className="bg-primary text-[#b894c0] py-12 px-4  ">
      <div className="container mx-auto max-w-6xl space-y-8 flex flex-col items-center">
        {/* Logo and Tagline */}
        <div className="text-center space-y-4">
          <a href="/" className="inline-block">
            <h2 className="text-white text-3xl font-bold">dofollow.com</h2>
          </a>
          <p className=" max-w-xl mx-auto">
            Strategically outrank your competitors with premium links from the web's best sites.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-white transition-colors">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="border-y border-[#844375] py-4 w-3/4">
          <ul className="flex flex-wrap justify-center text-white gap-x-8 gap-y-4">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Link Building Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">White Label Link Building</a></li>
            <li><a href="#" className="hover:text-white transition-colors">How We Work</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
          </ul>
        </nav>

        <div className="text-center flex flex-row gap-6">
  <p>© dofollow.com. All rights reserved.</p>
 
    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
    <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
    <a href="#" className="hover:text-white transition-colors">Fulfillment Policy</a>

</div>

      </div>
    </footer>
  )
}