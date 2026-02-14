import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    if (!formData.get("message").trim()) {
      toast.error("Please enter a message");
      return;
    }

    formData.append("access_key", "6a42c3fc-19cd-4460-861e-13f1543d5669");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        event.target.reset();
        setResult("");
      } else {
        console.log("Error", data);
        toast.error(data.message);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission Error", error);
      toast.error("Something went wrong. Please try again.");
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }} id="contact" className='w.full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[lenght:90%_auto] dark:bg-none'>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-lg font-Ovo'>Connnect with me</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        <span className="relative inline-block">
          Get in touch
          <motion.div
            className="absolute left-0 -bottom-2 h-1 bg-gray-700 dark:bg-white rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'> Java Full Stack Developer</motion.p>
      <motion.form
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit} className="w-full max-w-lg mx-auto p-6 sm:p-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-black dark:from-transparent dark:to-transparent
                 rounded-2xl shadow-xl flex flex-col gap-6 border border-gray-200 dark:border-white/20 transition-all duration-500 
                 hover:shadow-2xl dark:shadow-none">

        {/* Name & Email Inputs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            placeholder="Enter your name"
            required
            name='name'
            className="flex-1 p-4 border border-gray-300 dark:border-gray-300 rounded-xl focus:outline-none 
                 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:ring-offset-white dark:bg-white dark:text-black
                 shadow-sm transition-all duration-500 placeholder-gray-400 w-full"
          />
          < motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            placeholder="Enter your email"
            required
            name='email'
            className="flex-1 p-4 border border-gray-300 dark:border-gray-300 rounded-xl focus:outline-none 
                 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:ring-offset-white dark:bg-white dark:text-black
                 shadow-sm transition-all duration-500 placeholder-gray-400 w-full"
          />
        </div>

        {/* Message Textarea */}
        <motion.textarea
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows="6"
          name="message"
          placeholder="Enter your message"
          className="p-4 border border-gray-300 dark:border-gray-300 rounded-xl focus:outline-none 
               focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:ring-offset-white dark:bg-white dark:text-black
               shadow-sm transition-all duration-500 w-full"
        ></motion.textarea>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <motion.button

            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="relative overflow-hidden group px-8 py-3 bg-indigo-600 text-white font-Ovo rounded-full 
               shadow-lg w-full sm:w-auto flex items-center gap-2 justify-center transition-all duration-500 
               hover:bg-indigo-700 hover:scale-105 hover:shadow-2xl"
          >
            Submit
            <Image
              src={assets.right_arrow_white}
              alt="arrow"
              width={16}
              height={16}
            />

            {/* Ripple/Wave Effect */}
            <span className="absolute inset-0 rounded-full bg-white opacity-10 scale-0 group-hover:animate-ripple"></span>
          </motion.button>
          <p className="mt-4 text-center text-gray-700 dark:text-white font-Ovo text-base sm:text-lg 
              transition-all duration-500 hover:text-indigo-600">
            {result}
          </p>

        </div>


      </motion.form>



      <ToastContainer position="bottom-right" theme={isDarkMode ? "dark" : "light"} />
    </motion.div>
  )
}

export default Contact