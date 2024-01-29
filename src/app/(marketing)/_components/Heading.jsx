import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Heading() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 leading-8 ">
        Your Ideas, Document, & Plans. Unified. Welcome to
        <span className="underline ml-2">Potions</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium leading-relaxed">
        Potions is the connected workspace where <br />
        better, faster work happens.
      </h3>
      <Button asChild>
        <Link href="/documents">
          Enter Potions
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
}
