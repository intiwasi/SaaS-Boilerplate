export default function FreePlanPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-2xl font-bold">Free Plan</h1>
      <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Free Plan Details</h2>
        <p className="mb-4">Basic features for individuals getting started</p>
        <p className="mb-4 text-2xl font-bold">$0/month</p>
        <button className="w-full rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
          Start Free Plan
        </button>
      </div>
    </div>
  );
}
