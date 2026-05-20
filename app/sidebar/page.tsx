import Badge from "./_components/badge";
import Button from "./_components/button";
import Card from "./_components/cards";

export default function CardPage() {
  return (
    <div className="flex gap-2 justify-center items-center text-gray-100 h-screen">
      <Card
        title="Acme Inc"
        description="Interprise"
        type=""
      />

    </div>
  );
}