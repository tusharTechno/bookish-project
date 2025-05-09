import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({ data, handler, className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="capitalize">{data.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handler}>
            <div className="flex flex-col gap-6">
              {data.inputs.map((input, index) => (
                <div className="grid gap-3" key={index}>
                  <Label className="capitalize" htmlFor={input.Label}>
                    {input.Label}
                  </Label>
                  <Input
                    id={input.Label}
                    name={input.Label}
                    type={input.type}
                    placeholder={input.placeholder}
                    required
                  />
                </div>
              ))}
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  {data.button}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              {data.footer.redirectText}{" "}
              <a
                href={data.footer.redirectPath}
                className="underline underline-offset-4"
              >
                {data.footer.text}
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
