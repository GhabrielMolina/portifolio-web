import { Download, Link, Smartphone, ChevronsUp } from "lucide-react";
import { Button } from "./ui/button";

interface LinkButtonProps {
  name: string;
  url: string;
  icon: "Download" | "Link" | "ChevronsUp" | "Smartphone";
}

const iconMap = {
  Download,
  Link,
  ChevronsUp,
  Smartphone,
};

const LinkButtonItem = ({ name, url, icon }: LinkButtonProps) => {
  const IconComponent = iconMap[icon];
  return (
    <div>
      <Button
        className="flex gap-2 items-center text-destructive bg-destructive/15 rounded-full py-1 px-3 border border-solid border-destructive
        sm:py-5 sm:px-4
        md:py-6 md:px-5"
        asChild
      >
        <a href={url}>
          {IconComponent && (
            <IconComponent
              className="sm:size-7
              md:size-8"
            />
          )}
          <p
            className="font-semibold text-base 
            sm:text-lg
            md:text-xl"
          >
            {name}
          </p>
        </a>
      </Button>
    </div>
  );
};

export default LinkButtonItem;
