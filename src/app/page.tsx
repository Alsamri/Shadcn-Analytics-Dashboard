import { Button } from "@/components/ui/button";
import { BadgePlus } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant={"destructive"}>
        <BadgePlus />
        click me
      </Button>
    </div>
  );
}
