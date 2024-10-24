import { useTranslations } from 'next-intl';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Section } from '../features/landing/Section';

export const FAQ = () => {
  const t = useTranslations('FAQ');

  return (
    <Section
      id="faq"
      className="relative"
      title={t('section_title')}
      description={t('section_description')}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-600/5 via-blue-600/5 to-transparent" />
      <div className="absolute -left-48 top-0 size-[600px] animate-pulse rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute -right-96 bottom-0 size-[800px] animate-pulse rounded-full bg-blue-500/10 blur-3xl delay-700" />

      <Accordion
        type="multiple"
        className="relative w-full space-y-4"
      >
        <AccordionItem value="item-1" className="ai-card border-gray-800/50 px-6 transition-colors hover:border-gray-700/50">
          <AccordionTrigger className="transition-colors hover:text-blue-400">{t('question')}</AccordionTrigger>
          <AccordionContent className="text-gray-400">{t('answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="ai-card border-gray-800/50 px-6 transition-colors hover:border-gray-700/50">
          <AccordionTrigger className="transition-colors hover:text-purple-400">{t('question')}</AccordionTrigger>
          <AccordionContent className="text-gray-400">{t('answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="ai-card border-gray-800/50 px-6 transition-colors hover:border-gray-700/50">
          <AccordionTrigger className="transition-colors hover:text-indigo-400">{t('question')}</AccordionTrigger>
          <AccordionContent className="text-gray-400">{t('answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="ai-card border-gray-800/50 px-6 transition-colors hover:border-gray-700/50">
          <AccordionTrigger className="transition-colors hover:text-blue-400">{t('question')}</AccordionTrigger>
          <AccordionContent className="text-gray-400">{t('answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="ai-card border-gray-800/50 px-6 transition-colors hover:border-gray-700/50">
          <AccordionTrigger className="transition-colors hover:text-purple-400">{t('question')}</AccordionTrigger>
          <AccordionContent className="text-gray-400">{t('answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="ai-card border-gray-800/50 px-6 transition-colors hover:border-gray-700/50">
          <AccordionTrigger className="transition-colors hover:text-indigo-400">{t('question')}</AccordionTrigger>
          <AccordionContent className="text-gray-400">{t('answer')}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
};
