import { useSidebar } from "./ui/sidebar";
import { Menu } from "./Icons";
import { Button } from "./ui/button";

export default function Navbar() {
 const { toggleSidebar } = useSidebar();
 return (
  <nav className="sticky top-0 w-full flex items-center justify-between px-4 py-3 bg-white shadow z-10">
   <div className="flex items-center space-x-4">
    <Button variant="ghost" className="p-2 h-auto rounded-full" onClick={toggleSidebar}>
     <Menu className="!size-5" />
    </Button>
    <h1 className="text-lg font-semibold">Unnamed</h1>
   </div>
  </nav>
 );
}
