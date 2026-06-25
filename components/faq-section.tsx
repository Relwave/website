'use client'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/content/faqs'
import { HelpCircle } from 'lucide-react'

export function FAQSection() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 border border-primary/20"
          >
            <HelpCircle className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about RelWave, security, and supported features.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card/50 backdrop-blur-sm border border-border/60 rounded-3xl p-6 md:p-10 shadow-lg"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-border/60 data-[state=open]:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
