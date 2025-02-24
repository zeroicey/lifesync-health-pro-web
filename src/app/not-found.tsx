import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-4 px-6 py-16 lg:px-8">
      <Ghost className="h-16 w-16 text-muted-foreground animate-float" />
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
      <div className="mt-8 flex items-center justify-center gap-x-3">
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Contact support</Link>
        </Button>
      </div>
    </div>
  );
}
