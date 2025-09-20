import { DashboardHeader } from "@/components/dashboard-header"
import { ProgramFinderContent } from "@/components/program-finder-content"

export default function ProgramFinderPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="p-6">
        <ProgramFinderContent />
      </div>
    </div>
  )
}
