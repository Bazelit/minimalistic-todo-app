import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ModeToggle } from "@/components/mode-toggle";

const Settings = () => {
  return (
    <div className="wrapper">
      <h1 className="todoSettings">⚙ Настройки</h1>
      <div className="settings">
        <div className="flex  justify-between items-center border-b-[1px] font-light p-5">
          <span>Изменить тему</span>
          <ModeToggle />
        </div>
        <div className="flex justify-between items-center border-b-[1px] font-light p-5 border-none">
          <span>Язык</span>
          <Select>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Русский" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ru">Русский</SelectItem>
              <SelectItem value="en">Английский</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
