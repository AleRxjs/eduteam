import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TopicsSection } from '@/components/topics-section'
import { TeamRooms } from '@/components/team-rooms'
import { DailyChallenges } from '@/components/daily-challenges'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TopicsSection />
        <TeamRooms />
        <DailyChallenges />
      </main>
      <SiteFooter />
    </div>
  )
}
