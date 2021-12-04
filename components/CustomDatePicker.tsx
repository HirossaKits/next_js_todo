import React, { useState } from "react";
import moment, { Moment } from "moment";
import { SingleDatePicker, FocusedInputShape } from "react-dates";
import "moment/locale/ja";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

type Props = {
  date: string;
  // setDate: (date: Date) => void;
  setDate: Function;
};

// ブロックする日付を指定します。
const blockedDate: moment.Moment[] = [
  // moment().add(1, "days"),
  // moment().add(11, "days"),
  // moment().add(20, "days"),
];

const CustomDateRangePicker = (props: Props) => {
  const [date, setdDate] = useState<Moment | null>(moment(props.date));
  const [focused, setFocused] = useState<boolean>(false);

  const handleDatesChange = (newDate: Moment | null) => {
    setdDate(newDate);
  };

  const handleFocusChange = ({ focused }: { focused: boolean }) => {
    setFocused(focused);
  };

  const handleIsDayBlocked = (day: Moment) =>
    blockedDate.filter((d) => d.isSame(day, "day")).length > 0;

  return (
    <>
      <SingleDatePicker
        id='datepicker'
        date={date}
        focused={focused}
        onDateChange={handleDatesChange}
        onFocusChange={handleFocusChange}
        monthFormat={"YYYY年MM月"}
        displayFormat={"YYYY/MM/DD"}
        hideKeyboardShortcutsPanel={true}
        numberOfMonths={1}
        block={false}
        small={true}
        withFullScreenPortal={false}
        anchorDirection={"left"}
        orientation='horizontal'
        isDayBlocked={handleIsDayBlocked}
        isOutsideRange={() => false}
      />
    </>
  );
};

export default CustomDateRangePicker;
