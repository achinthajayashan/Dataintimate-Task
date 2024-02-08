import {Sidebar} from "@/app/ui/dashboard/sidebar/sidebar";
import {Navbar} from "@/app/ui/dashboard/navbar/navbar";

export default function Layout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="w-screen h-auto flex">
            <div className=" ">
                <Sidebar/>
            </div>

            <div className="w-full">
                <Navbar/>
                {children}
            </div>

        </section>
    );
}
