'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Create Intelligent Forms with
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"> AI</span>
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-gray-300 sm:max-w-md lg:max-w-none">
              Transform your data collection with NeuralForms. Our AI-powered form builder creates intelligent, adaptive
              forms that understand your needs and deliver better responses.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button className="bg-purple-600 hover:bg-purple-500 text-white rounded-full px-8 py-6 text-lg" size="lg">
                Start Building
              </Button>
              <Button variant="ghost" className="text-gray-300 hover:text-white text-lg" size="lg">
                Watch Demo
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
          >
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-background/10 to-transparent h-48" />
                <img
                  src="/assets/background/form-preview-1.svg"
                  alt="Form preview"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-background/10 to-transparent h-48" />
                <img
                  src="/assets/background/form-preview-2.svg"
                  alt="Form preview"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
