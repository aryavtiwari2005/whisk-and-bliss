'use client'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCookieBite, 
  faBreadSlice, 
  faCoffee 
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

export default function About() {
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const statItemVariants = {
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
  };

  const imageVariants = {
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`${playfairDisplay.className} text-5xl font-bold text-primary flex items-center`}
            >
              <FontAwesomeIcon icon={faCookieBite} className="mr-4 text-primary" />
              Our Story
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`${lora.className} text-gray-700 leading-relaxed text-lg italic`}
            >
              Founded in 2010, Whisk & Bliss began as a small family-owned bakery with a passion for creating 
              artisanal bread and pastries. Our journey started with a simple sourdough starter and a dream 
              to bring authentic, handcrafted baked goods to our community.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`${nunito.className} text-gray-700 leading-relaxed text-lg font-light`}
            >
              Today, we continue to honor traditional baking methods while embracing innovation. Each item 
              is crafted with carefully selected ingredients, time-honored techniques, and most importantly, 
              love for the art of baking.
            </motion.p>
            
            <motion.div 
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {[
                { icon: faBreadSlice, value: '13+', label: 'Years of Experience' },
                { icon: faCoffee, value: '50+', label: 'Daily Varieties' },
                { icon: faCookieBite, value: '1000+', label: 'Happy Customers' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={statItemVariants}
                  className="text-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
                >
                  <FontAwesomeIcon 
                    icon={stat.icon} 
                    className="text-2xl text-primary mb-2" 
                  />
                  <h3 className={`${playfairDisplay.className} text-3xl font-bold text-primary`}>{stat.value}</h3>
                  <p className={`${nunito.className} text-gray-600 font-light`}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { src: '/bakery-1.jpeg', alt: 'Bakery Interior', height: 'h-48' },
              { src: '/bakery-2.jpeg', alt: 'Fresh Bread', height: 'h-64' },
              { src: '/bakery-3.jpeg', alt: 'Pastry Making', height: 'h-64' },
              { src: '/bakery-4.jpeg', alt: 'Finished Pastries', height: 'h-48' }
            ].map((image, index) => (
              <motion.div 
                key={index}
                className={`rounded-2xl overflow-hidden ${image.height} ${
                  index % 2 === 1 ? 'pt-8' : ''
                }`}
                whileHover="hover"
                variants={imageVariants}
              >
                <motion.img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}