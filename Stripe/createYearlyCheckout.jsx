import {
  getFirestore,
  collection,
  addDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import initializeStripe from "./initializeStripe";

// Assuming you have a function to initialize Stripe

export async function createYearlyCheckout(uid) {
  const firestore = getFirestore();

  // Create a new checkout session in the subcollection inside this user's document
  const checkoutSessionRef = await addDoc(
    collection(doc(firestore, "users", uid), "checkout_sessions"),
    {
      price: "price_1O5G1ZH01vvQqMUsiNg8ptAH",
      success_url: `${window.location.origin}/settings`,
      cancel_url: `${window.location.origin}/for-you`,
    }
  );

  // Wait for the CheckoutSession to get attached by the extension
  onSnapshot(checkoutSessionRef, async (snap) => {
    const { sessionId } = snap.data();
    if (sessionId) {
      // We have a session, let's redirect to Checkout
      // Init Stripe
      const stripe = await initializeStripe();
      stripe.redirectToCheckout({ sessionId });
    }
  });
}
