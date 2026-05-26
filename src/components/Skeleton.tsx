export default function Skeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse space-y-6">
      {/* Header Skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-slate-200 rounded-full w-24"></div>
        <div className="h-8 bg-slate-200 rounded-lg w-1/3"></div>
        <div className="h-4 bg-slate-200 rounded-full w-1/2"></div>
      </div>
      
      {/* Content Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {[1, 2, 3].map((val) => (
          <div key={val} className="bg-slate-100/80 border border-slate-200/50 rounded-2xl p-6 h-48 space-y-4">
            <div className="w-12 h-12 bg-slate-200 rounded-xl"></div>
            <div className="h-5 bg-slate-200 rounded-lg w-3/4"></div>
            <div className="h-3.5 bg-slate-200 rounded-full w-full"></div>
            <div className="h-3.5 bg-slate-200 rounded-full w-5/6"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
