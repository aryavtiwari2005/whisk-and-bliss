"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCookie, 
  faCake, 
  faPizzaSlice,
  faBreadSlice,
  faIceCream,
  faCandyCane,
  faPieChart,
  faCoffee
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Playfair_Display, Lora, Nunito } from 'next/font/google';

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

export default function Hero() {
  const productCards = [
    { icon: faBreadSlice, title: 'Breads' },
    { icon: faCookie, title: 'Croissant' },
    { icon: faCake, title: 'Cakes' },
    { icon: faCoffee, title: 'Beverages' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Layer */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-lg"
        style={{
          backgroundImage: 'url("/cafe.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 space-y-12 pt-24">
        {/* Hero Text Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white space-y-7 max-w-3xl mx-auto"
        >
          <h1 className={`${playfairDisplay.className} text-5xl md:text-6xl font-bold text-white`}>
            Whisk & Bliss
            <span className={`${nunito.className} block text-2xl mt-2 text-gray-200 font-light tracking-wider`}>
              Artisanal Bakery & Patisserie
            </span>
          </h1>
          
          <p className={`${lora.className} text-xl text-gray-100 leading-relaxed max-w-xl mx-auto font-light italic`}>
            Discover a world of delectable treats crafted with passion, 
            using the finest ingredients and time-honored techniques.
          </p>
          
          <div className="flex justify-center space-x-6">
            <motion.a 
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${nunito.className} bg-primary text-white px-8 py-4 rounded-full 
              shadow-lg hover:bg-secondary transition-all font-semibold tracking-wider`}
            >
              View Our Menu
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${nunito.className} border-2 border-white text-white px-8 py-4 
              rounded-full hover:bg-white hover:text-black transition-all font-semibold tracking-wider`}
            >
              Visit Us
            </motion.a>
          </div>
        </motion.div>

        {/* Featured Products Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {productCards.map((product, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-white/15 backdrop-blur-xl p-6 rounded-2xl shadow-2xl text-center 
              transform transition-all hover:scale-105 hover:shadow-2xl group"
            >
              <FontAwesomeIcon 
                icon={product.icon} 
                className="text-5xl text-white mb-4 group-hover:text-primary transition-colors" 
              />
              <h3 className={`${nunito.className} font-semibold text-white text-lg tracking-wide`}>
                {product.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}