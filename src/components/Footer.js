'use client'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebookF, 
  faInstagram, 
  faTwitter, 
  faPinterestP 
} from '@fortawesome/free-brands-svg-icons'
import { 
  faEnvelope, 
  faMapMarkerAlt, 
  faPhone 
} from '@fortawesome/free-solid-svg-icons'
import { Playfair_Display, Nunito } from 'next/font/google'
import Link from 'next/link'

// Configure fonts
const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin']
});

const nunito = Nunito({
  weight: ['300', '400', '600'],
  subsets: ['latin']
});

export default function Footer() {
  const socialLinks = [
    { icon: faFacebookF, href: "#" },
    { icon: faInstagram, href: "#" },
    { icon: faTwitter, href: "#" },
    { icon: faPinterestP, href: "#" }
  ]

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Contact", href: "#contact" }
  ]

  const contactInfo = [
    { 
      icon: faEnvelope, 
      label: "contact@whiskandbliss.com",
      href: "mailto:contact@whiskandbliss.com"
    },
    { 
      icon: faPhone, 
      label: "+91 78380 89545",
      href: "tel:917838089545"
    },
    { 
      icon: faMapMarkerAlt, 
      label: "B-12, Sector 63, Noida, Uttar Pradesh - 201301",
      href: "#"
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-4 gap-12"
        >
          {/* Bakery Description */}
          <div className="space-y-6">
            <h3 className={`
              ${playfairDisplay.className} 
              text-3xl font-bold text-white
            `}>
              Whisk & Bliss
            </h3>
            <p className={`
              ${nunito.className} 
              text-white/80 text-base
            `}>
              Crafting moments of joy through artisanal baking since 2010. 
              Passionate about creating delightful experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`
              ${playfairDisplay.className} 
              text-xl font-semibold mb-6 text-white
            `}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className={`
                      ${nunito.className}
                      text-white/80 
                      hover:text-white 
                      hover:pl-2 
                      transition-all 
                      duration-300
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4 className={`
              ${playfairDisplay.className} 
              text-xl font-semibold mb-6 text-white
            `}>
              Hours
            </h4>
            <ul className={`
              ${nunito.className}
              space-y-2 
              text-white/80
            `}>
              <li>Monday - Friday: 7AM - 7PM</li>
              <li>Saturday: 8AM - 7PM</li>
              <li>Sunday: 8AM - 7PM</li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className={`
              ${playfairDisplay.className} 
              text-xl font-semibold mb-6 text-white
            `}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li 
                  key={index} 
                  className="flex items-center space-x-3"
                >
                  <FontAwesomeIcon 
                    icon={contact.icon} 
                    className="text-white/80 text-lg" 
                  />
                  <a 
                    href={contact.href}
                    className={`
                      ${nunito.className}
                      text-white/80 
                      hover:text-white 
                      transition-colors
                    `}
                  >
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className={`
            ${nunito.className}
            text-white/70
          `}>
            &copy; {new Date().getFullYear()} Whisk & Bliss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}