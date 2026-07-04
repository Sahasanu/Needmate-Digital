import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";

/**
 * Fetches a service by ID and its corresponding pricing plans.
 * Merges the generic plan details with the service-specific pricing.
 * 
 * @param {string} serviceId - The ID of the service document to fetch
 * @returns {Promise<{ service: any, plans: any[] }>} Object containing the service and sorted array of merged plans
 */
export const fetchServiceWithPlans = async (serviceId) => {
    try {
        // 1. Fetch the service document by its ID
        const serviceRef = doc(db, "services", String(serviceId));
        const serviceSnap = await getDoc(serviceRef);

        if (!serviceSnap.exists()) {
            throw new Error(`Service with ID ${serviceId} not found.`);
        }

        const serviceData = { id: serviceSnap.id, ...serviceSnap.data() };
        
        // The plans are now embedded inside the service document
        let plans = serviceData.plans || [];

        // Add 'id' field to each plan (mapped from planId) for backward compatibility
        // and sort by durationDays ascending (or price)
        plans = plans.map(p => ({ ...p, id: p.planId })).sort((a, b) => (a.durationDays || 0) - (b.durationDays || 0));

        return {
            service: serviceData,
            plans: plans
        };

    } catch (error) {
        console.error("Error in fetchServiceWithPlans:", error);
        throw error;
    }
};
