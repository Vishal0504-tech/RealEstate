 import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "@/components/ui/accordion"
import { FAQ } from "@/constants"

function Faq() {
  return (
    <div className="container mx-auto my-20">
        <h2 className="mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
            FAQ
        </h2>
        <Accordion type="single" collapsible className="w-full p-10">
            {FAQ.map((faq , index) => (
                <AccordionItem  key={index} value="{faq.value}">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
             

            ))}
            

        </Accordion>
    </div>
  )
}

export default Faq