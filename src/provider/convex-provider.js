'use client'

import React from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export const ConvexClientProvider = ({children}) => {
     return (
          <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
               <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                    {children}
               </ConvexProviderWithClerk>
          </ClerkProvider>
     )
}