import Container from "../../../Components/layout/Container";

import CouponInput from "./CouponInput";
import PaymentSelector from "./PaymentSelector";
import PriceBreakdown from "./PriceBreakDown";
import CheckoutButton from "./CheckoutButton";
import HelpCard from "./HelpCard";

export default function OrderSummary({ currentPlan, basePrice, pricing, paymentMethod, setPaymentMethod, onApplyCoupon, couponMessage, onCheckout }) {
    return (
        <div
            className=" rounded-3xl " >
                <div className="space-y-5 sticky top-24">
                    <div className=" rounded-3xl bg-white p-6 shadow-lg ">
                        <h2 className="mb-3 text-2xl font-bold "> Order Summary  </h2>
                        <PriceBreakdown plan={currentPlan} basePrice={basePrice} pricing={pricing} />

                        <div className="my-3">
                            <CouponInput
                                onApply={onApplyCoupon}
                                message={couponMessage}
                            />
                        </div>
                        {/* <PaymentSelector
                            paymentMethod={paymentMethod}
                            setPaymentMethod={setPaymentMethod} /> */}
                        <div className="mt-6">
                            <CheckoutButton onClick={onCheckout} />
                        </div>
                    </div>
                    <HelpCard />
                </div> 
        </div>


    );

}
