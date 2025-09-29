import FeatureShowcase from '../FeatureShowcase';

export default function FeatureShowcaseExample() {
  return (
    <div className="p-6 space-y-12">
      <FeatureShowcase variant="features" />
      <FeatureShowcase variant="use-cases" />
    </div>
  );
}