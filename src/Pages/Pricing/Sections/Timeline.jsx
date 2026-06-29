
import TimelineItem from "./TimelineItem";

export default function Timeline({ timeline }) {
  return (
    <section className="py-12">
    
        <div className="rounded-[32px] bg-[#f2f3ff] p-8">
          <h2 className="mb-10 text-4xl font-bold">
            Deliverables Timeline
          </h2>
          <div>
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.week}
                description={item.desc}
                isLast={index === timeline.length - 1}
              />
            ))}
          </div>
        </div>
     
    </section>
  );
}