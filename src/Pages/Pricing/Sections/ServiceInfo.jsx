import RatingBar from "./RatingBar";

export default function ServiceInfo({ service }) {
  return (
    <div className="space-y-6">
      <div className="relative h-[420px] overflow-hidden rounded-[32px] group">
        <img
          src={service.imgUrl}
          alt={service.title}
          className="h-full w-full object-cover duration-700 group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute bottom-8 left-8 text-white">
          <span className="rounded-lg bg-[#00685f]/90 px-3 py-1 text-xs uppercase tracking-wider">
            {service.category || service.tags?.[0] || "Digital Service"}
          </span>
          <h1 className="mt-3 text-5xl font-bold">
            {service.title}
          </h1>
        </div>
      </div>
      <RatingBar
        rating={service.rating}
        reviews={service.reviews}
        clients={service.clients}
      />
    </div>
  );
}