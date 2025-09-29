import Footer from '../Footer';

export default function FooterExample() {
  return (
    <div>
      <div className="min-h-screen p-6">
        <h3 className="text-lg font-semibold mb-4">Page Content Above Footer</h3>
        <p className="text-muted-foreground">This represents the main page content...</p>
      </div>
      <Footer />
    </div>
  );
}