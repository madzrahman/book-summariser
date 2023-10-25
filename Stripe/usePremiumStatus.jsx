import { useEffect, useState } from "react";
import { onIdTokenChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function usePremiumStatus(user) {
  const [premiumStatus, setPremiumStatus] = useState(false);

  useEffect(() => {
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
