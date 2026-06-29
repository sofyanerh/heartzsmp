import { rules } from "../data/rules";
import RuleCategoryCard from "../components/rules/RuleCategoryCard";

export default function Rules() {
  return (
    <div className="rules-page">

      <div className="rules-hero">
        <h1>Server Rules</h1>
        <p>
          Please read carefully before playing.
          Not knowing the rules does not exempt you from punishment.
        </p>
      </div>

      <div className="rules-list">
        {rules.map((category) => (
          <RuleCategoryCard
            key={category.id}
            title={category.title}
            rules={category.items}
            description={category.description}
            details={category.details}
          />
        ))}
      </div>

    </div>
  );
}