export default function RouteLoader() {
  return (
    <div className="section-shell flex min-h-[60vh] items-center justify-center py-20">
      <div className="panel flex w-full max-w-xl items-center gap-4 px-6 py-5">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-caramel-300/35 border-t-caramel-300" />
        <div>
          <p className="text-sm font-semibold text-cream-100">Brewing the next view</p>
          <p className="text-sm text-cream-300">Loading content and assets for this page.</p>
        </div>
      </div>
    </div>
  );
}
