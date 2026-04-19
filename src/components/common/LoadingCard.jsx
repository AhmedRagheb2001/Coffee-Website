export default function LoadingCard() {
  return (
    <div className="panel overflow-hidden">
      <div className="h-56 animate-pulse bg-white/8" />
      <div className="space-y-4 p-6">
        <div className="h-4 w-24 animate-pulse rounded-full bg-white/10" />
        <div className="h-8 w-2/3 animate-pulse rounded-full bg-white/10" />
        <div className="h-4 w-full animate-pulse rounded-full bg-white/10" />
        <div className="h-4 w-5/6 animate-pulse rounded-full bg-white/10" />
      </div>
    </div>
  );
}
