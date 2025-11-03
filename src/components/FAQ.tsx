import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    question: "How does the AI voice agent work?",
    answer: "We work directly with your office manager to decide when the agent should run — for example, when there's a new appointment or a new patient without verified insurance. Once triggered, the AI agent calls the patient's insurance carrier, navigates the IVR menus, and speaks directly with the insurance representative to collect coverage details for each ADA code you need. It performs the same process your back-office team would, then automatically brings the information back into your practice management software (PMS) in a structured format. We customize this integration with your team so it fits seamlessly into your existing workflow."
  },
  {
    question: "How is this different from electronic verification?",
    answer: "Electronic verification is limited and often inaccurate — not all insurance carriers support it, and it rarely provides the full breakdown of benefits your office needs. Our AI agent performs real phone calls, just like a human, ensuring you get complete and up-to-date coverage information directly from the insurance representative."
  },
  {
    question: "Which insurance carriers do you work with?",
    answer: "All of them. The AI voice agent can call any dental insurance carrier in the U.S., including smaller regional ones that don't support electronic verification."
  },
  {
    question: "How accurate is the information collected?",
    answer: "As accurate as you need it to be. The AI retrieves the same information a trained staff member would — and we can tailor the depth and formatting of the data without any difference in price."
  },
  {
    question: "Can we access call transcripts or recordings?",
    answer: "Yes. Every call is automatically transcribed and recorded for full transparency. You can review transcripts and recordings directly in your Azops dashboard at any time."
  },
  {
    question: "How much does it cost?",
    answer: "We charge $2 per successful verification. There are no setup fees, no minimums, and no contracts. You only pay when the verification is fully completed with all the details you need."
  },
  {
    question: "What counts as a successful verification?",
    answer: "A verification is considered successful only when the AI agent retrieves all the information you need from the insurance representative. If any details are missing and your team has to call the insurance themselves, you are not charged for that verification."
  },
  {
    question: "Is there a contract or setup fee?",
    answer: "No. You only pay per successful verification and can stop anytime — no long-term commitments or hidden costs."
  },
  {
    question: "How does the integration with our PMS work?",
    answer: "One of our founders personally builds the integration with your team to ensure everything functions exactly as you want. The process is customized to your software and workflow — nothing changes in the way your staff operates."
  },
  {
    question: "Do we need to change the way we work?",
    answer: "Not at all. The entire process happens directly inside your PMS. Your team continues working as usual — the only difference is that insurance verification becomes fully automated."
  },
  {
    question: "Is the AI HIPAA-compliant?",
    answer: "Yes. Our entire system and processes are fully HIPAA-compliant to protect your patients' PHI at every step."
  }
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our AI voice agent
          </p>
        </div>
        
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
