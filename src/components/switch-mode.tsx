import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { Switch } from "@/components/ui/switch"

const THEME_KEY = "site-theme"

function getInitialTheme(): "dark" | "light" {
  try {
    const stored = localStorage.getItem(THEME_KEY)
    if (stored === "dark" || stored === "light") return stored
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark"
  } catch (e) {
    /* ignore */
  }
  return "light"
}

export default function SwitchMode() {
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    typeof window === "undefined" ? "light" : getInitialTheme()
  )

  useEffect(() => {
    try {
      const root = document.documentElement
      if (theme === "dark") root.classList.add("dark")
      else root.classList.remove("dark")
      localStorage.setItem(THEME_KEY, theme)
    } catch (e) {
      /* ignore */
    }
  }, [theme])

  return (
    <div className="flex items-center gap-2" title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
      <Sun className="text-amber-600" size={16} />
      <Switch checked={theme === "dark"} onCheckedChange={(v: boolean) => setTheme(v ? "dark" : "light")} />
      <Moon className="text-gray-500" size={16} />
    </div>
  )
}
