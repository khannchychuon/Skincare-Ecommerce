import { UsersTable } from "../../../app-components/users-table";
import { UsersHeader } from "../../../app-components/users-header";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <UsersHeader />
      <UsersTable />
    </div>
  );
}
