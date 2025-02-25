import { DocsNav } from "@/components/docs/DocsNav";
import { DocsContent } from "@/components/docs/DocsContent";

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <DocsNav />
        <div className="flex-1 lg:ml-64">
          <DocsContent />
        </div>
      </div>
    </div>
  );
}
