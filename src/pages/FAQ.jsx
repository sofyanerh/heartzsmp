import { faqData } from "../data/faqData";
import FAQCategory from "../components/faq/FAQCategory";

export default function FAQ() {
  return (
    <>
      <div className="faq-hero">
        <h1>Frequently Asked Questions</h1>

        <p>
          Answers to the questions players ask most often.
          If your question isn't listed here, contact staff on Discord.
        </p>
      </div>

      {faqData.map((category, index) => (
        <FAQCategory
          key={index}
          title={category.category}
          questions={category.questions}
        />
      ))}
    </>
  );
}