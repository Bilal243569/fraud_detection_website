import GiftCardMarketplace from '../GiftCardMarketplace';

export default function GiftCardMarketplaceExample() {
  const handlePurchase = (card: any, amount: number) => {
    console.log(`Purchased ${card.name} for $${amount}`);
  };

  return (
    <div className="p-6">
      <GiftCardMarketplace onPurchase={handlePurchase} />
    </div>
  );
}