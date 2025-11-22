//the placeholder is updated
import { useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";  

export const Placeholder = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Page Placeholder</h1>
        <p className="text-muted-foreground">
          You navigated to: <code>{location.pathname}</code>
        </p>
      </Card>
    </div>
  );
};
