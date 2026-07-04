import { useState } from "react";
import { createOrderService, createSubscriptionService } from "../services/checkout.service";
import usePayment from "./usePayment";

export default function useCheckout() {
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);

  const { initiateRazorpayCheckout, verifyPayment } = usePayment();

  const handleCheckoutFlow = async ({ serviceId, planId, paymentMethod, couponCode, onSuccess, onFailure, onCashPayment }) => {
    setCheckoutLoading(true);
    setCheckoutError(null);
    try {
      let orderResponse;

      // 1. Create Razorpay Order or Subscription (no Firestore write on backend)
      if (paymentMethod === "EMI") {
        orderResponse = await createSubscriptionService(serviceId, planId, couponCode);
      } else {
        orderResponse = await createOrderService(serviceId, planId, paymentMethod, couponCode);
      }

      const { razorpayOrderId, subscriptionId, amount, currency, paymentType, razorpayKeyId } = orderResponse;

      // 2. Open Razorpay Checkout or handle Cash
      if (paymentMethod === "CASH") {
        // Pass context so CashCodeModal can send it to verifyCashPayment
        if (onCashPayment) {
          onCashPayment({ serviceId, planId, couponCode: couponCode || null });
        }
        return;
      }

      const options = {
        key: razorpayKeyId,
        name: "NeedMet Digital",
        description: "Service Purchase",
      };

      if (!options.key) {
        throw new Error("Missing Razorpay Key ID");
      }

      if (paymentMethod === "EMI" || subscriptionId) {
        options.subscription_id = subscriptionId;
      } else {
        options.amount = amount;
        options.currency = currency;
        options.order_id = razorpayOrderId;
      }

      const paymentResponse = await initiateRazorpayCheckout(options);

      // 3. Verify signature only (webhook handles Firestore)
      await verifyPayment(
        paymentResponse.razorpay_order_id || razorpayOrderId,
        paymentResponse.razorpay_payment_id,
        paymentResponse.razorpay_signature
      );

      // 4. Navigate to success
      if (onSuccess) {
        onSuccess(paymentResponse.razorpay_payment_id);
      }
    } catch (err) {
      const errorMessage = err.message || "Checkout process failed";
      setCheckoutError(errorMessage);
      console.error("Checkout flow error:", err);
      if (onFailure) {
        onFailure(errorMessage);
      }
    } finally {
      setCheckoutLoading(false);
    }
  };

  return {
    handleCheckoutFlow,
    checkoutLoading,
    checkoutError,
  };
}
