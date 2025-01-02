'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react'
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isMessageSent, setIsMessageSent] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate message sending
    setIsMessageSent(true);

    // Reset form and message sent state after 3 seconds
    setTimeout(() => {
      setIsMessageSent(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 3000);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`
            ${playfairDisplay.className} 
            text-5xl font-bold text-primary mb-6
          `}>
            Visit Us
          </h2>
          <p className={`
            ${lora.className} 
            text-gray-600 max-w-2xl mx-auto text-xl italic
          `}>
            We'd love to have you visit our bakery. Stop by for fresh bread, beautiful pastries, 
            and a warm welcome from our team.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-primary"
          >
            <h3 className={`
              ${playfairDisplay.className} 
              text-3xl font-bold text-primary mb-8 text-center
            `}>
              Contact Information
            </h3>
            <div className="space-y-8">
              {[
                { 
                  icon: Phone, 
                  title: "Phone", 
                  content: "+91 78380 89545" 
                },
                { 
                  icon: Mail, 
                  title: "Email", 
                  content: "contact@whiskandbliss.com" 
                },
                { 
                  icon: MapPin, 
                  title: "Location", 
                  content: "B-12, Sector 63, Noida, Uttar Pradesh - 201301", 
                },
                { 
                  icon: Clock, 
                  title: "Hours", 
                  content: "Monday - Friday: 7:00 AM - 7:00 PM",
                  extra: "Saturday - Sunday: 8:00 AM - 7:00 PM"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-6 group"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="
                      bg-primary/10 
                      text-primary 
                      p-4 
                      rounded-full 
                      group-hover:bg-primary 
                      group-hover:text-white 
                      transition-all
                    "
                  >
                    <item.icon className="w-7 h-7" />
                  </motion.div>
                  <div>
                    <p className={`
                      ${nunito.className} 
                      font-semibold text-gray-800
                    `}>
                      {item.title}
                    </p>
                    <p className={`
                      ${nunito.className} 
                      text-gray-600
                    `}>
                      {item.content}
                    </p>
                    {item.extra && (
                      <p className={`
                        ${nunito.className} 
                        text-gray-600
                      `}>
                        {item.extra}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-primary"
          >
            <h3 className={`
              ${playfairDisplay.className} 
              text-3xl font-bold text-primary mb-8 text-center
            `}>
              Send us a Message
            </h3>
            <div className="space-y-6">
              {[
                { 
                  id: "name", 
                  label: "Name", 
                  type: "text" 
                },
                { 
                  id: "email", 
                  label: "Email", 
                  type: "email" 
                }
              ].map((field) => (
                <div key={field.id}>
                  <label 
                    htmlFor={field.id} 
                    className={`
                      ${nunito.className} 
                      block text-gray-700 mb-2
                    `}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    className={`
                      ${nunito.className}
                      w-full px-4 py-3 
                      border border-gray-300 
                      rounded-lg 
                      focus:ring-2 focus:ring-primary 
                      focus:border-transparent
                      transition-all
                      duration-300
                    `}
                  />
                </div>
              ))}
              <div>
                <label 
                  htmlFor="message" 
                  className={`
                    ${nunito.className} 
                    block text-gray-700 mb-2
                  `}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`
                    ${nunito.className}
                    w-full px-4 py-3 
                    border border-gray-300 
                    rounded-lg 
                    focus:ring-2 focus:ring-primary 
                    focus:border-transparent
                    transition-all
                    duration-300
                  `}
                ></textarea>
              </div>
              <AnimatePresence mode="wait">
                {!isMessageSent ? (
                  <motion.button
                    key="send-button"
                    type="submit"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`
                      ${nunito.className}
                      w-full bg-primary text-white py-3 rounded-lg 
                      hover:bg-secondary transition-colors duration-300
                    `}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  </motion.button>
                ) : (
                  <motion.div
                    key="sent-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`
                      ${nunito.className}
                      w-full bg-green-500 text-white py-3 rounded-lg 
                      flex items-center justify-center space-x-2
                    `}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <Check className="w-6 h-6" />
                    </motion.div>
                    <span>Message Sent Successfully!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}