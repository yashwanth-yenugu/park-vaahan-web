import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            Park Vaahan
          </CardTitle>
          <CardDescription>Your parking management solution</CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl mb-4">Coming Soon</h2>
          <Button variant="default">Click me!</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
