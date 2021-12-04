import React, { useState } from "react";
import moment from "moment";
import { DateRangePicker, FocusedInputShape } from "react-dates";
import "moment/locale/ja";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

// ブロックする日付を指定します。
const blockedDate: moment.Moment[] = [
  // moment().add(1, "days"),
  // moment().add(11, "days"),
  // moment().add(20, "days"),
];

const CustomDateRangePicker = () => {
  const [startDate, setStartDate] = useState<moment.Moment | null>(moment);
  const [endDate, setEndDate] = useState<moment.Moment | null>(moment);
  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(
    null
  );

  const handleDatesChange = ({
    startDate,
    endDate,
  }: {
    startDate: moment.Moment | null;
    endDate: moment.Moment | null;
  }) => {
    if (focusedInput === "startDate") {
      setStartDate(startDate);
    } else {
      setEndDate(endDate);
    }
  };

  const handleFocusChange = (focusedInput: FocusedInputShape | null) => {
    setFocusedInput(focusedInput);
  };

  const handleIsDayBlocked = (day: moment.Moment) =>
    blockedDate.filter((d) => d.isSame(day, "day")).length > 0;

  return (
    <>
      <DateRangePicker
        startDate={startDate}
        startDateId='daterangepicker_startdate'
        endDate={endDate}
        endDateId='daterangepicker_enddate'
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={handleFocusChange}
        displayFormat={"YYYY/MM/DD"}
        hideKeyboardShortcutsPanel={true}
        numberOfMonths={2}
        block={false}
        small={true}
        withFullScreenPortal={false}
        anchorDirection={"left"}
        orientation='horizontal'
        minimumNights={0}
        isDayBlocked={handleIsDayBlocked}
      />
    </>
  );
};

export default CustomDateRangePicker;
