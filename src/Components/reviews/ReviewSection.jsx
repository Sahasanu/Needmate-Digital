import Container from "../layout/Container";
import ReviewCard from "./ReviewCard";

export default function ReviewSection({
    reviews
}) {

    return (

        <section id="reviews" className="py-20 scroll-mt-36">

            <Container>

                <div className="mb-12 text-center">

                    <h2 className="text-4xl font-bold">

                        Client Reviews

                    </h2>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    {reviews.map((review) => (

                        <ReviewCard
                            key={review.id}
                            name={review.name}
                            role={review.role}
                            image={review.img}
                            review={review.text}
                            bgColor={review.bgColor}
                        />

                    ))}

                </div>

            </Container>

        </section>

    );

}