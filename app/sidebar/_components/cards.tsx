import Badge from "./badge";
import Button from "./button";

export default function Card({
  title,
  description,
  type,
  color,
}: {
  title: string;
  description: string;
  type: string;
  color?: string;
}) {
  return (
    <div className="p-2 bg-black-200 rounded-2xl">
      <div className="bg-black-200 flex flex-col gap-3 w-72 h-auto p-4 rounded-2xl">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="flex flex-col justify-center m-7 h[500px] max-w-[600px]">
          <Badge name="playground" />
          <Badge name="models" />
          <Badge name="documentation" />
          <Badge name="Settings" />
        </div>
      </div>
      <div className="flex justify-between p-4 items-center">
        <h2 className="font-bold">{type}</h2>
        <Button />
      </div>
    </div>
  );
}