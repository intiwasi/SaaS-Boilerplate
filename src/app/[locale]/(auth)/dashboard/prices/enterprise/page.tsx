export default function EnterprisePlanPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-2xl font-bold">Enterprise Plan</h1>
      <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Enterprise Plan Details</h2>
        <p className="mb-4">Complete solution for large organizations</p>
        <p className="mb-4 text-2xl font-bold">$99/month</p>
        <div className="mt-6">
          <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Subscribe to Enterprise
          </button>
        </div>
      </div>
    </div>
  );
}
