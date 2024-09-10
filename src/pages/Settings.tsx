import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="wrapper">
      <h1 className="todoSettings">⚙ Настройки</h1>
      <div className="settings">
        <div className="flex justify-between items-center border-b-[1px] font-light p-5">
          <span>Светлая тема</span>
          <Switch />
        </div>
        <div className="flex justify-between items-center border-b-[1px] font-light p-5">
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
