import { useEffect, useState } from "react";
import { getAuth, onIdTokenChanged } from "firebase/auth";

export default function usePremiumStatus(user) {
  const [premiumStatus, setPremiumStatus] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    return onIdTokenChanged(auth, async (user) => {
      if (user) {
        const tokenResult = await user.getIdTokenResult();
        if (tokenResult.claims.stripeRole === "premium") {
          setPremiumStatus(true);
        }
      } else {
        setPremiumStatus(false);
      }
    });
  }, [user]);

  return premiumStatus;
}
