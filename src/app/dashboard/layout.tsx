'use client'
import {Sidebar} from "@/app/ui/dashboard/sidebar/sidebar";
import {Navbar} from "@/app/ui/dashboard/navbar/navbar";
import {useState} from "react";

export default function Layout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isCompact,setCompact]=useState(false);
    const compactWindow = () => {
        setCompact(!isCompact);
    };
    return (
        <section className="w-screen h-auto flex">
            <div>
                <Sidebar compactWindow={compactWindow}/>
            </div>

            <div className="w-full">
                <Navbar/>
                {children}
            </div>

        </section>
    );
}
