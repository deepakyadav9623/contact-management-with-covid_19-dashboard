import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header />
            <main className=" ml-64 h-full mt-10 p-10">{children}</main>
          </div>
        </div>
    );
};


