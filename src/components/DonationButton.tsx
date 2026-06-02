import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

interface DonationButtonProps {
  href: string;
  className?: string;
  label?: string;
  size?: VariantProps<typeof buttonVariants>["size"];
}

export function DonationButton({
  href,
  className,
  label = "Faire un don",
  size,
}: DonationButtonProps) {
  return (
    <Button
      nativeButton={false}
      size={size}
      className={className}
      render={<a href={href} target="_blank" rel="noopener noreferrer" />}
    >
      <Heart className="size-4" aria-hidden="true" />
      {label}
    </Button>
  );
}
