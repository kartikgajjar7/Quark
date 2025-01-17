import React from "react";

type Page = {
  icon: React.ReactNode;
  title: string;
  lastModified?: string;
};

export function RecentlyVisitedCard({ page }: { page: Page }) {
  return (
    <div className="flex-shrink-0 w-48 bg-[#202020] rounded-lg p-4 hover:bg-[#252525] transition-colors cursor-pointer">
      <div className="flex flex-col space-y-3">
        <div className="text-gray-400">{page.icon}</div>
        <div>
          <h3 className="text-sm font-medium text-gray-200 truncate">
            {page.title}
          </h3>
          {page.lastModified && (
            <p className="text-xs text-gray-500 mt-0.5">{page.lastModified}</p>
          )}
        </div>
      </div>
    </div>
  );
}
