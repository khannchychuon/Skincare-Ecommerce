import { CategoriesTable } from "@/components/categories-table"
import { CategoriesHeader } from "@/components/categories-header"

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <CategoriesHeader />
      <CategoriesTable />
    </div>
  )
}
