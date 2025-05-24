import { ReviewsTable } from "@/components/reviews-table"
import { ReviewsHeader } from "@/components/reviews-header"

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <ReviewsHeader />
      <ReviewsTable />
    </div>
  )
}
