"use client"
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

type SideBarButtonProps = {
    href: string
    children: React.ReactNode
}

const SideBarButton = ({ href, children }: SideBarButtonProps) => {
    const pathName = usePathname();
    return (
        <Button className="justify-start gap-2" variant={pathName == href ? "secondary" : "ghost"} asChild>
          <Link href={href}>
            {children}
          </Link>
        </Button>
    );
}
 
export default SideBarButton;