'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Shield, Zap, Workflow, PaintBucket, Share2 } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Form Generation',
    description: 'Create intelligent forms instantly with AI suggestions and smart autofill capabilities.',
    icon: BrainCircuit,
  },
  {
    name: 'Real-Time Data Insights',
    description: 'Get AI-driven analytics and visualizations to understand your form responses better.',
    icon: Zap,
  },
  {
    name: 'Enterprise-Grade Security',
    description: 'Bank-level encryption and GDPR compliance to keep your data safe and secure.',
    icon: Shield,
  },
  {
    name: 'Workflow Automation',
    description: 'Automate responses and trigger actions based on form submissions.',
    icon: Workflow,
  },
  {
    name: 'Custom Branding',
    description: 'Personalize forms with your brand colors, logos, and themes.',
    icon: PaintBucket,
  },
  {
    name: 'Seamless Integrations',
    description: 'Connect with your favorite tools like Zapier, Slack, and Google Sheets.',
    icon: Share2,
  },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Supercharge Your Forms with AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Experience the next generation of form building with powerful AI features and seamless integrations.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex flex-col rounded-2xl bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-purple-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
