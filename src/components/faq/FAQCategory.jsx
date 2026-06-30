import FAQAccordion from "./FAQAccordion";

export default function FAQCategory({
  title,
  questions,
}) {
  return (
    <section className="faq-category">
      <h2>{title}</h2>

      {questions.map((item, index) => (
        <FAQAccordion
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </section>
  );
}