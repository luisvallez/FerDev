import { portfolio } from "./data/portfolio"
import { AboutSection } from "./components/sections/AboutSection"
import { ContactSection } from "./components/sections/ContactSection"
import { Hero } from "./components/sections/Hero"
import { ProjectsSection } from "./components/sections/ProjectsSection"
import { StackSection } from "./components/sections/StackSection"
import { TimelineSection } from "./components/sections/TimelineSection"
import { Footer } from "./components/layout/Footer"
import { Header } from "./components/layout/Header"

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <ProjectsSection projects={portfolio.projects} />
        <AboutSection />
        <StackSection groups={portfolio.stacks} />
        <TimelineSection items={portfolio.timeline} />
        <ContactSection email={portfolio.email} />
      </main>
      <Footer />
    </>
  )
}
