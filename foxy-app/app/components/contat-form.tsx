import { cn } from "@/app/lib/utils";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";

export function ContactForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-6 w-full max-w-[450px]", className)}
      {...props}
    >
      <Card>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" type="text" placeholder="john doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Sujet</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Information"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="message">Message</Label>
                </div>
                <Textarea id="message" />
              </div>
              <Button type="submit" className="w-full">
                Envoyer
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
