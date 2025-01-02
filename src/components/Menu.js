'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBreadSlice, 
  faCookie, 
  faCake,
  faMugHot 
} from '@fortawesome/free-solid-svg-icons'
import { Playfair_Display, Lora, Nunito } from 'next/font/google'

// Configure fonts
const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin']
});

const lora = Lora({
  weight: ['400', '700'],
  subsets: ['latin']
});

const nunito = Nunito({
  weight: ['300', '400', '600'],
  subsets: ['latin']
});

const menuItems = [
  {
    category: "Bread",
    icon: faBreadSlice,
    items: [
      { name: "Sourdough Boule", price: "699", description: "Traditional fermented sourdough with a crispy crust", image: "/sourdough.jpeg" },
      { name: "Rustic Baguette", price: "649", description: "Classic French-style baguette with a golden crust", image: "/baguette.jpeg" },
      { name: "Multigrain Loaf", price: "499", description: "Hearty bread packed with nutritious grains and crusty base", image: "/multigrain.jpeg" }
    ]
  },
  {
    category: "Croissant",
    icon: faCookie,
    items: [
      { name: "Butter Croissant", price: "349", description: "Flaky, layered pastry made with French butter", image: "/croissant.jpeg" },
      { name: "Pain au Chocolat", price: "449", description: "Chocolate-filled croissant pastry", image: "/chocolate-croissant.jpeg" },
      { name: "Almond Danish", price: "499", description: "Sweet pastry filled with almond cream", image: "/danish.jpeg" }
    ]
  },
  {
    category: "Cakes",
    icon: faCake,
    items: [
      { name: "Classic Chocolate", price: "1299", description: "Rich chocolate layers with ganache", image: "/chocolate-cake.jpeg" },
      { name: "Vanilla Bean", price: "999", description: "Light vanilla sponge with buttercream", image: "/vanilla-cake.jpeg" },
      { name: "Red Velvet", price: "1999", description: "Cocoa-flavored cake with cream cheese frosting", image: "/red-velvet.jpeg" }
    ]
  },
  {
    category: "Beverages",
    icon: faMugHot,
    items: [
      { 
        name: "Espresso", 
        price: "149", 
        description: "Rich, bold single-origin espresso shot", 
        image: "/espresso.jpeg" 
      },
      { 
        name: "Cappuccino", 
        price: "199", 
        description: "Smooth espresso with steamed milk and foam", 
        image: "/cappuccino.jpeg" 
      },
      { 
        name: "Matcha Latte", 
        price: "249", 
        description: "Ceremonial grade matcha with steamed milk", 
        image: "/matcha-latte.jpeg" 
      }
    ]
  }
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Bread")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  }

  return (
    <section id="menu" className="py-20 px-4 max-w-7xl mx-auto bg-gradient-to-br from-white to-gray-50">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${playfairDisplay.className} text-5xl font-bold text-center text-primary mb-12`}
      >
        Our Menu
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center space-x-6 mb-16"
      >
        {menuItems.map(({category, icon}) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`
              flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 
              ${selectedCategory === category
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } ${nunito.className}
            `}
          >
            <FontAwesomeIcon icon={icon} />
            <span>{category}</span>
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        key="menu-items-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {menuItems
          .find(({category}) => category === selectedCategory)
          ?.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1 
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
            >
              <div className="overflow-hidden">
                <motion.img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <div className="p-6">
                <h3 className={`${lora.className} text-2xl font-bold mb-2 text-primary`}>{item.name}</h3>
                <p className={`${nunito.className} text-gray-600 mb-4 font-light`}>{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`${playfairDisplay.className} text-2xl font-bold text-primary`}>Rs. {item.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </section>
  )
}