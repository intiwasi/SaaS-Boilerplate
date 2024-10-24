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

  const questions = [
    {
      question: '¿Cómo funciona la tecnología de visión artificial de IntiTutor?',
      answer: 'IntiTutor utiliza tecnología avanzada de visión artificial para analizar tus exámenes de práctica en tiempo real. Simplemente toma una captura de pantalla o conecta tu teléfono a tu computadora usando nuestro adaptador, y nuestra IA proporcionará instantáneamente respuestas y explicaciones detalladas en tu dispositivo móvil.',
    },
    {
      question: '¿Es segura mi información?',
      answer: 'Sí, utilizamos encriptación de extremo a extremo para proteger toda tu información y datos de estudio.',
    },
    {
      question: '¿Puedo usar la aplicación en múltiples dispositivos?',
      answer: 'Sí, puedes acceder a tu cuenta desde cualquier dispositivo y sincronizar tu progreso automáticamente.',
    },
    {
      question: '¿Qué tipos de exámenes puedo analizar?',
      answer: 'Nuestra IA puede analizar cualquier tipo de examen o cuestionario, incluyendo matemáticas, ciencias, historia y más.',
    },
    {
      question: '¿Cuánto tiempo toma recibir las respuestas?',
      answer: 'Las respuestas y explicaciones son instantáneas, apareciendo en tu dispositivo móvil en segundos después de capturar la pregunta.',
    },
    {
      question: '¿Necesito conexión a internet?',
      answer: 'Sí, se requiere conexión a internet para el análisis en tiempo real y la sincronización entre dispositivos.',
    },
  ];

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
        {questions.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="ai-card border-gray-800/50 px-6 transition-colors hover:border-gray-700/50"
          >
            <AccordionTrigger className="transition-colors hover:text-blue-400">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};
