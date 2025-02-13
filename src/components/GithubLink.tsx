import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const GithubLink = () => {
  return (
    <>
      <span>GitHub</span>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button className="btn " variant="outline" size="icon" asChild>
              <Link to="https://github.com/Bazelit/minimalistic-todo-app">
                <Github />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Bazelit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default GithubLink;
