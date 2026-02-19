import type React from "react";
import Card from "./core/card";
import CardTitle from "./core/card-title";
import CardDescription from "./core/card-description";
import CardIcon from "./core/card-icon";

interface TitleDescriptionCardProps {
  icon: any;
  title: string;
  description: string;
}

const TitleDescriptionCard: React.FC<TitleDescriptionCardProps> = ({
  icon,
  title,
  description,
}: TitleDescriptionCardProps) => {
  return (
    <Card>
      <div className="flex gap-4">
        <CardIcon icon={icon} />
        <div>
          <CardTitle title={title} />
          <CardDescription description={description} />
        </div>
      </div>
    </Card>
  );
};

export default TitleDescriptionCard;
