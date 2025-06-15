import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Clerk imports
import { ClerkProvider } from "@clerk/clerk-react";

// Environment variable
const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Ensure Clerk key is present
if (!clerkFrontendApi) throw new Error("Clerk key required");

// ReactDOM render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={clerkFrontendApi}
      signInUrl="/login"
      signUpUrl="/signup"
    >
      <App />
    </ClerkProvider>
  </StrictMode>
);
