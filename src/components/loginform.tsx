import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const { t } = useTranslation();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{t("Login")}</CardTitle>
          <CardDescription>
            {t("Enter your email below to login to your account")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">{t("Email")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("Enter your email")}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{t("Password")}</Label>
                  <Link
                    to="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                   {t("Forgot your password?")}
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="btn w-full">
                {t("Login")}
              </Button>
              <Button variant="outline" className="btn w-full">
                {t("Login with")} Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              {t("Don&apos;t have an account?")}{" "}
              <Link to="/signup" className="underline underline-offset-4">
                {t("Sign Up")}
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
