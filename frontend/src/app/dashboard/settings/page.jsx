import { SettingsTabs } from "@/components/settings-tabs"
import { SettingsHeader } from "@/components/settings-header"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <SettingsHeader />
      <SettingsTabs />
    </div>
  )
}
