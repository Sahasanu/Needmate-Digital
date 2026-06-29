export default function ReviewCard({
    name,
    role,
    image,
    review,
    bgColor
}) {

    return (

        <div className="rounded-3xl border border-[#bcc9c6]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="mb-5 flex items-start justify-between">

                <div className="flex items-center gap-4">

                    <div className={`h-12 w-12 overflow-hidden rounded-full ${bgColor}`}>

                        <img
                            src={image}
                            alt={name}
                            className="h-full w-full object-cover"
                        />

                    </div>

                    <div>

                        <h4 className="font-bold">

                            {name}

                        </h4>

                        <p className="text-sm text-[#216963]">

                            {role}

                        </p>

                    </div>

                </div>

                <div className="flex text-[#00685f]">

                    {[...Array(5)].map((_, i) => (

                        <span
                            key={i}
                            className="material-symbols-outlined"
                            style={{
                                fontVariationSettings: "'FILL' 1"
                            }}
                        >
                            star
                        </span>

                    ))}

                </div>

            </div>

            <p className="italic text-[#131b2e]">

                {review}

            </p>

        </div>

    );

}