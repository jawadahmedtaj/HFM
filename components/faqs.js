import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Faqs() {
  const questions = [
    { question: 'Question A', answer: 'Answer A' },
    { question: 'Question B', answer: 'Answer B' },
    { question: 'Question C', answer: 'Answer C' },
    { question: 'Question D', answer: 'Answer D' },
  ];

  return (
    <div className="bg-[#F4F4F4] py-32">
      <div className="grid grid-flow-row place-content-center pb-16 gap-32 ">
        <p className="text-black font-normal text-5xl place-self-center">FAQs</p>
      </div>
      <div className="flex justify-center">
        <div className="container ">
          <div className="w-full">
            <Accordion type="single" collapsible>
              {questions.map(({ question, answer }, index) => (
                <AccordionItem className="border-0" key={index} value={`item-${index}`}>
                  <AccordionTrigger className="border-b border-b-[#B9B7B7] px-12">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="px-12 mt-2">{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
