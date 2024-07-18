import { ListFilter, LayoutDashboard, LineChart, WrapText, Globe, PieChart, FolderOpen, Bell, Files, BookmarkCheck } from 'lucide-react'

export const navItems = [
    { href: '/sources', label: 'Default Filter', icon: ListFilter },
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/timeline', label: 'Timeline', icon: LineChart },
    { href: '/enforcement', label: 'RegGPT', icon: WrapText },
    { href: '/news', label: 'News', icon: Globe },
    { href: '/insights', label: 'Insights', icon: PieChart },
    { href: '/folders', label: 'Folders', icon: FolderOpen },
    { href: '/notifications', label: 'Notifications', icon: Bell },
    { href: '/resources', label: 'Resources', icon: Files },
    { href: '/tasks', label: 'Tasks', icon: BookmarkCheck },
    
]