import { faqsData } from "./faqsData";
import FaqsUnit from "./faqsUnit";

export default function Faqs() {
  const printFaqs = faqsData.map((item) => (
    <FaqsUnit key={item.id} qoute={item.qoute} answer={item.answer} />
  ));
  return (
    <div className="grid md:grid-cols-2 gap-3 mt-10 p-10">{printFaqs}</div>
  );
}
