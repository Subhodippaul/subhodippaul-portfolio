import { Button } from "@/components/ui/button"
import HeroImage from "@/assets/profile.jpg"
import { useEffect, useRef } from "react"
import Typed from "typed.js"
import "./typing.css"
import { Github, Linkedin, Instagram } from "lucide-react"

export default function Home() {
	const el = useRef(null)
	const typed = useRef<Typed | null>(null)

	useEffect(() => {
		if (el.current) {
			typed.current = new Typed(el.current, {
				strings: [
					"Full Stack Developer",
					"Frontend Developer",
					"Backend Developer"
				],
				typeSpeed: 50,
				backSpeed: 50,
				backDelay: 1000,
				loop: true,
				showCursor: false
			})
		}

		return () => {
			if (typed.current) {
				typed.current.destroy()
			}
		}
	}, [])

	return (
		<section id="home" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				{/* Left: details */}
				<div className="space-y-6">
					{/* <p className="text-sm font-medium text-amber-600">Hello</p> */}
					<h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white flex flex-col gap-2">
						<span className="quicksand-uniquifier">Hi, I&apos;m Subhodip Paul</span>
						<span className="text-amber-600 flex items-center" ref={el}></span>
					</h1>
					<p className="text-base text-gray-600 dark:text-gray-300 max-w-xl">
						I build performant, accessible web applications using modern tools
						and best practices. I enjoy turning ideas into production-ready
						products and learning new technologies along the way.
					</p>

					<div className="flex flex-col gap-6">
						<div className="flex items-center gap-4">
							<Button asChild>
								<a href="/contact">KNOW MORE</a>
							</Button>
							<Button variant="ghost" asChild>
								<a href="#skills">See skills</a>
							</Button>
						</div>

						{/* Social Links */}
						<div className="flex items-center gap-4">
							<a
								href="https://github.com/Subhodippaul"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-500 transition-colors"
							>
								<Github className="h-6 w-6" />
								<span className="sr-only">GitHub</span>
							</a>
							<a
								href="https://linkedin.com/in/your-linkedin"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-500 transition-colors"
							>
								<Linkedin className="h-6 w-6" />
								<span className="sr-only">LinkedIn</span>
							</a>
							<a
								href="https://instagram.com/your-instagram"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-amber-600 dark:text-gray-300 dark:hover:text-amber-500 transition-colors"
							>
								<Instagram className="h-6 w-6" />
								<span className="sr-only">Instagram</span>
							</a>
						</div>
					</div>
				</div>

				{/* Right: image */}
				<div className="flex justify-center md:justify-end">
					<img src={HeroImage} alt="hero" className="w-95 h-120 object-contain rounded-4xl shadow-2xl" />
				</div>
			</div>
		</section>
	)
}
