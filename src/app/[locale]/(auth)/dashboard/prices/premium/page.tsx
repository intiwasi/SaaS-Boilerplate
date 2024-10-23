export default function PremiumPlanPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-2xl font-bold">Premium Plan</h1>
      <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Premium Plan Details</h2>
        <p className="mb-4">Advanced features for professionals</p>
        <p className="mb-4 text-2xl font-bold">$29/month</p>
        <div className="mt-6">
          <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Subscribe to Premium
          </button>
        </div>
      </div>
    </div>
  );
}
