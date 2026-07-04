import { verifyPaymentCallable, verifyCashPaymentCallable } from "./cloudFunctions";

export const verifyPaymentService = async (razorpay_order_id, razorpay_payment_id, razorpay_signature) => {
  try {
    const response = await verifyPaymentCallable({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });
    return response.data;
  } catch (error) {
    console.error("Error verifying payment:", error);
    throw error;
  }
};

export const verifyCashPaymentService = async (serviceId, planId, couponCode, code) => {
  try {
    const response = await verifyCashPaymentCallable({ serviceId, planId, couponCode: couponCode || null, code });
    return response.data;
  } catch (error) {
    console.error("Error verifying cash payment:", error);
    throw error;
  }
};
