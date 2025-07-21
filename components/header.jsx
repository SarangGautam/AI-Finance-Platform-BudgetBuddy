import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";




const Header = async () => {
    await checkUser();
    return (
        <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b ">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/">
                    <span className="text-2xl font-bold text-[#6c47ff]">BUDGETBUDDY</span>
                </Link>

                <div className="flex items-center space-x-4">
                    <SignedIn>
                        <Link href={"/dashboard"} className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                            <Button variant="outline" className="cursor-pointer">
                                <LayoutDashboard size={18} />
                                <span className="hidden md:inline">Dashboard</span>
                            </Button>
                        </Link>


                        <Link href={"/transaction/create"}>
                            <Button className="flex items-center gap-2 cursor-pointer">
                                <PenBox size={18} />
                                <span className="hidden md:inline">Add Transaction</span>
                            </Button>
                        </Link>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton appearance={{
                            elements: {
                                avatarBox: "w-12 h-12",
                            }
                        }} />
                    </SignedIn>
                </div>
            </nav>
        </div>
    )
}

export default Header
