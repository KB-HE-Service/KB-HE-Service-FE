import { useState, useRef } from "react";

import { useDataStore } from "@/shared";

const URL = import.meta.env.VITE_DEC_SERVER_URL;

export const DecSocketService = () => {
  const setInferenceResult = useDataStore((state) => state.setInferenceResult);
  const clientId = useDataStore((state) => state.clientId);

  const onopen = () => {};

  return {};
};
