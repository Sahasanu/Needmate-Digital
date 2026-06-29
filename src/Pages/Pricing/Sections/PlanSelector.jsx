import PlanCard from "./PlanCard";

export default function PlanSelector({
  plans,
  selectedPlan,
  onSelect,
  basePrice
}) {
  return (
    <section className="py-2">
     
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">
            Select Duration
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(plans).map(([title, plan]) => (
              <PlanCard
                key={title}
                title={title}
                plan={plan}
                basePrice={basePrice}
                selected={selectedPlan === title}
                onSelect={onSelect}
              />
            ))}
          </div>
        </div>
      
    </section>
  );
}