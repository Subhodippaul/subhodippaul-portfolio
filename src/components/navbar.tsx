import { useState } from "react"
import { useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import SwitchMode from "@/components/switch-mode"

export default function Navbar() {
	const [open, setOpen] = useState(false)
	const location = useLocation()

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "#skills", label: "Skills" },
		{ href: "/contact", label: "Contact" },
	]

	const isActive = (href: string) => {
		if (href.startsWith('#')) {
			return location.hash === href
		}
		return location.pathname === href
	}

		return (
			<header className="w-full bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-white/10">
			<nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="flex items-center gap-3">
						<a href="#home" className="flex items-center gap-3 text-inherit no-underline">
							<span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-600 text-white font-semibold">
								<strong>SP.</strong>
							</span>
							{/* <span className="hidden text-lg font-medium text-gray-800 sm:inline">Subhodip Paul</span> */}
						</a>
					</div>

					{/* Desktop links using NavigationMenu */}
					<div className="hidden sm:flex sm:items-center sm:gap-4">
						<NavigationMenu>
							<NavigationMenuList>
								{navLinks.map((l) => (
									<NavigationMenuItem key={l.href}>
										<NavigationMenuLink
											href={l.href}
											className={cn(
												"px-3 py-2 rounded-md text-sm font-medium",
												"text-gray-700 hover:bg-amber-100 hover:text-amber-800",
												isActive(l.href) && "bg-amber-100 text-amber-800"
											)}
										>
											{l.label}
										</NavigationMenuLink>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>

								{/* Right controls (desktop) */}
								<div className="hidden sm:flex sm:items-center sm:gap-4">
									<SwitchMode />
								</div>

								{/* Mobile menu button */}
					<div className="sm:hidden">
						<button
							aria-label="Toggle menu"
							onClick={() => setOpen((v) => !v)}
							className="inline-flex items-center justify-center rounded-md p-2 text-sm hover:bg-amber-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{open ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile menu panel */}
				{open && (
					<div className="sm:hidden mt-2 pb-4">
						<div className="flex flex-col gap-1">
							{navLinks.map((l) => (
								<a
									key={l.href}
									href={l.href}
									onClick={() => setOpen(false)}
									className={cn(
										"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-amber-100",
										isActive(l.href) && "bg-amber-100 text-amber-800"
									)}
								>
									{l.label}
								</a>
							))}

							{/* Mobile theme switch */}
							<div className="mt-2 px-3">
								<SwitchMode />
							</div>
						</div>
					</div>
				)}
			</nav>
		</header>
	)
}
