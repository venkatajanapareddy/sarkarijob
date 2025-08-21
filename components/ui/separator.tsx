import { cn } from "@/lib/utils"

export function Separator({ 
  className, 
  orientation = "horizontal",
  ...props 
}: React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical"
}) {
  return (
    <div
      className={cn(
        "shrink-0 bg-gray-200 dark:bg-gray-700",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
}