import { useNavigate } from "react-router-dom";
import Badge from "../common/Badge";
import Tag from "../common/Tag";
import IconButton from "../common/Iconbutton";

export default function ServiceCard({
    id,
    title,
    description,
    image,
    icon,
    price,
    tags = [],
    badge,
    badgeColor,
    featured = false,
    buttonIcon = "add_shopping_cart"
}) {

    const navigate = useNavigate();

    const handleCardClick = () => {
        if (id) {
            navigate(`/service/${id}`);
        }
    };

    return (

        <div
            onClick={handleCardClick}
            role={id ? "link" : undefined}
            tabIndex={id ? 0 : undefined}
            onKeyDown={(e) => {
                if (id && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    handleCardClick();
                }
            }}
            className={`
            group
            overflow-hidden
            rounded-3xl
            border
            bg-white
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
            ${id ? "cursor-pointer" : ""}

            ${featured
                    ? "border-2 border-[#00685f]/30"
                    : "border-[#bcc9c6]/30"
                }
            `}
        >

            {/* IMAGE */}

            <div className="relative h-48 overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {badge && (

                    <div className="absolute left-4 top-4">

                        <Badge
                            className={
                                badgeColor ||
                                "bg-white text-[#00685f]"
                            }
                        >
                            {badge}
                        </Badge>

                    </div>

                )}

            </div>

            {/* CONTENT */}

            <div className="space-y-5 p-6">

                <div className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-[#00685f]">
                        {icon}
                    </span>

                    <h3 className="text-2xl font-semibold">

                        {title}

                    </h3>

                </div>

                <p className="line-clamp-2 text-[#216963]">

                    {description}

                </p>

                {/* TAGS */}

                <div className="flex flex-wrap gap-2">

                    {tags.map((tag) => (

                        <Tag
                            key={tag}
                            label={tag}
                        />

                    ))}

                </div>

                {/* PRICE */}

                <div className="flex items-center justify-between border-t pt-5">

                    <div>

                        <p className="text-xs text-[#216963]">

                            {featured
                                ? "Bundle Price"
                                : "Starts at"}

                        </p>

                        <h3 className="text-2xl font-bold text-[#00685f]">

                            {price}

                        </h3>

                    </div>
                    <div onClick={(e) => e.stopPropagation()}>
                        <IconButton
                            to={id ? `/service/${id}` : undefined}
                            variant={featured ? "primary" : "default"}
                            icon={buttonIcon}
                        />
                    </div>


                </div>

            </div>

        </div>

    );

}