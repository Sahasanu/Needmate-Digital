import { createOrderCallable, createSubscriptionCallable } from "./cloudFunctions";

export const createOrderService = async (serviceId, planId, paymentMethod, couponCode) => {
  try {
    const response = await createOrderCallable({ serviceId, planId, paymentMethod, couponCode });
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const createSubscriptionService = async (serviceId, planId, couponCode) => {
  try {
    const response = await createSubscriptionCallable({ serviceId, planId, couponCode });
    return response.data;
  } catch (error) {
    console.error("Error creating subscription:", error);
    throw error;
  }
};
