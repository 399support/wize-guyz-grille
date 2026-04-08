import StoreLocator from '@/components/StoreLocator';

export default function StoreLocatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Store Locator
        </h1>
        <StoreLocator />
      </div>
    </div>
  );
}
