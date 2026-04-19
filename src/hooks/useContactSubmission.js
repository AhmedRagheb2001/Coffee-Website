import { useCallback, useState } from "react";

export function useContactSubmission() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const submitMessage = useCallback(async (formValues) => {
    setStatus("loading");
    setErrorMessage("");

    await new Promise((resolve) => window.setTimeout(resolve, 950));

    if (formValues.email.toLowerCase().includes("fail")) {
      const message = "Our message service is temporarily unavailable.";
      setStatus("error");
      setErrorMessage(message);
      throw new Error(message);
    }

    setStatus("success");
    return { ok: true };
  }, []);

  const resetStatus = useCallback(() => {
    setStatus("idle");
    setErrorMessage("");
  }, []);

  return {
    errorMessage,
    resetStatus,
    status,
    submitMessage,
  };
}
