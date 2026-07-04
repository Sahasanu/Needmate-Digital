import { applyCouponCallable } from "./cloudFunctions";

export const applyCouponService = async (couponCode, serviceId, planId, paymentMethod = "ALL") => {
  try {
    const response = await applyCouponCallable({ couponCode, serviceId, planId, paymentMethod });
    return response.data;
  } catch (error) {
    console.error("Error applying coupon:", error);
    throw error;
  }
};
