"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Document = () => {
  const { user } = useUser();
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="
      dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos; Potion!
      </h2>
      <Button className='mt-4'>
        <PlusCircle className="w-4 h-4 mr-2 " />
        Create a Note
      </Button>
    </div>
  );
};

export default Document;
