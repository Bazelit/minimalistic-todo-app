import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Palette } from "lucide-react";
import { setTheme } from "@/redux/themeSlice";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

const ThemeCustomizer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <>
      <span>{t("Color scheme")}</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Palette />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => dispatch(setTheme("default"))}
          >
            <div className="inline-block w-3 h-3 color bg-current rounded-full mr-3" />
            {t("Default")}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => dispatch(setTheme("yellow"))}
          >
            <div className="inline-block w-3 h-3 color bg-yellow-400 rounded-full mr-3" />
            {t("Yellow")}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => dispatch(setTheme("purple"))}
          >
            <div className="inline-block w-3 h-3 color bg-purple-400 rounded-full mr-3" />
            {t("Purple")}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => dispatch(setTheme("blue"))}
          >
            <div className="inline-block w-3 h-3 color bg-blue-400 rounded-full mr-3" />
            {t("Blue")}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => dispatch(setTheme("slate"))}
          >
            <div className="inline-block w-3 h-3 color bg-slate-400 rounded-full mr-3" />
            {t("Slate")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ThemeCustomizer;
