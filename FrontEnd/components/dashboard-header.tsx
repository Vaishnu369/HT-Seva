"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Home, LayoutDashboard, LogOut, Search, Users } from "lucide-react"
import Link from "next/link"

export function DashboardHeader() {
  return (
    <header className="bg-primary text-primary-foreground px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and greeting */}
        <div className="flex items-center gap-4">
          <div className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
            HT
          </div>
          <h1 className="text-lg font-semibold">Admin Dashboard - Happy Thoughts</h1>
        </div>

        {/* Center - Navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/notifications"
            className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
          >
            <Bell className="w-4 h-4" />
            <span>Notifications</span>
          </Link>
          <Link href="/logout" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Link>
        </nav>

        {/* Right side - Search and Profile */}
        <div className="flex items-center gap-4">
          <Link href="/program-finder">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Search className="w-4 h-4 mr-2" />
              Program Finder
            </Button>
          </Link>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/user-avatar.jpg" alt="Admin" />
            <AvatarFallback className="bg-primary-foreground text-primary">A</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
