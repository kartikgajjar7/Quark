import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { FileText, Clock } from "lucide-react";
import { RecentlyVisitedCard } from "@/components/dashboard/RecentlyVisitedCard";
const recentlyVisited = [
  {
    id: "9",
    title: "jho",
    icon: <FileText className="h-4 w-4" />,
    lastModified: "Just now",
  },
  {
    id: "10",
    title: "New page",
    icon: <FileText className="h-4 w-4" />,
    lastModified: "Just now",
  },
  {
    id: "11",
    title: "Prisma + Nextauth",
    icon: <FileText className="h-4 w-4" />,
    lastModified: "1d ago",
  },
  {
    id: "12",
    title: "hi",
    icon: <FileText className="h-4 w-4" />,
    lastModified: "1d ago",
  },
  {
    id: "13",
    title: "New page",
    icon: <FileText className="h-4 w-4" />,
    lastModified: "Jan 9",
  },
];

const DashboardPage = async () => {
  const session = await auth();
  return (
    <div className="w-full overflow-hidden-300 ">
      <div className="">
        <main className="p-8 flex flex-col items-center px-28 justify-center">
          <div className="mb-8 no-scrollbar w-full ">
            <h1 className="text-3xl text-center font-bold text-gray-100 mb-6">
              Goood afternoon, {session?.user.name as string}
            </h1>

            {/* Recently visited section */}
            <div>
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                <Clock className="h-4 w-4" />
                <span>Recently visited</span>
              </div>
              <div className="flex space-x-4 overflow-x-auto pb-4">
                {recentlyVisited.map((page) => (
                  <RecentlyVisitedCard key={page.id} page={page} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
