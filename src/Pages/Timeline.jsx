import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { FaCalendarAlt } from "react-icons/fa"; // Importing a calendar icon

import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";
dayjs.extend(utc);
dayjs.extend(timezone);

const Calendar = () => {
  const [origData, setOrigData] = useState([]);
  const [data, setData] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [regulationList, setRegulationList] = useState([]);
  const [divisionList, setDivisionList] = useState([]);
  useEffect(() => {
    const dataImport = async () => {
      try {
        const response = await fetch("http://localhost:5173/data.xlsx");
        if (!response.ok) {
          throw new Error("File not found or unable to fetch");
        }
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });

        // Extract data from the first sheet
        const firstSheetName = workbook.SheetNames[0];
        const firstSheet = workbook.Sheets[firstSheetName];
        const sheetData = XLSX.utils.sheet_to_json(firstSheet);

        // Extract unique values for lists
        const uniqueStateRegulators = Array.from(
          new Set(sheetData.map((row) => row["State Regulators"]))
        );
        const uniqueReportDivisions = Array.from(
          new Set(sheetData.map((row) => row["Report division"]))
        );
const wholeData = workbook.SheetNames.map((name)=>{
  const sheet = workbook.Sheets[name];
  const sheetData = XLSX.utils.sheet_to_json(sheet);
  return {
    sheetName:name,sheetData
  }
})
        // Update state
        setCountryList(workbook.SheetNames);
        setRegulationList(uniqueStateRegulators);
        setDivisionList(uniqueReportDivisions);
        setOrigData(wholeData);
        setSelectedReportDivision(uniqueReportDivisions[0]);
        setSelectedStateRegulator(uniqueStateRegulators[0]);
        setData({ sheetName: firstSheetName, sheetData });
      } catch (error) {
        console.error("Error fetching or processing the data:", error);
      }
    };

    dataImport();
  }, []); 
const navigate = useNavigate()
  const currentDate = dayjs(); // Get the current date
  const currentYear = currentDate.year();
  const [selectedDate, setSelectedDate] = useState(currentDate); // Default to current date
  const [tempDate, setTempDate] = useState(currentDate); // Temporary date for selection
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [step, setStep] = useState(0); // To track the selection step
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentDate.month()); // Default to current month
  const [yearOffset, setYearOffset] = useState(0); // For navigating years

  // New state variables for filters
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedStateRegulator, setSelectedStateRegulator] = useState("");
  const [selectedReportDivision, setSelectedReportDivision] = useState("");

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedMonth(tempDate.month()); // Reset month to the temporary date's month
    setStep(1); // Move to month selection
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setStep(2); // Move to day selection
  };

  const handleDateClick = (day) => {
    setTempDate(day); // Set the temporary date
  };

  const confirmDateChange = () => {
    setSelectedDate(tempDate); // Confirm the date change
    setShowDatePicker(false); // Close the date picker
  };

  const daysInMonth =
    selectedMonth !== null
      ? dayjs().year(selectedYear).month(selectedMonth).daysInMonth()
      : 0;
  const firstDayOfMonth =
    selectedMonth !== null
      ? dayjs().year(selectedYear).month(selectedMonth).startOf("month").day()
      : 0;
  const days = Array.from({ length: daysInMonth }, (_, i) =>
    dayjs()
      .year(selectedYear)
      .month(selectedMonth)
      .date(i + 1)
  );

  // Generate years for display
  const years = Array.from(
    { length: 12 },
    (_, i) => currentYear - 5 + yearOffset + i
  );

  // Generate months for display
  const months = Array.from({ length: 12 }, (_, i) =>
    dayjs().month(i).format("MMMM")
  );

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
    setStep(0); // Reset to year selection when opening the date picker
  };

  // Function to generate the calendar for the selected month
  const generateCalendar = () => {
    const calendar = [];
    const totalDays = daysInMonth;
    let currentDay = 1;

    // Fill the calendar with empty cells for the days before the first of the month
    const week = Array(7).fill(null);
    for (let i = 0; i < firstDayOfMonth; i++) {
      week[i] = null; // Empty cells
    }

    // Fill the calendar with the actual days
    for (let i = firstDayOfMonth; i < 7; i++) {
      if (currentDay <= totalDays) {
        week[i] = dayjs()
          .year(selectedYear)
          .month(selectedMonth)
          .date(currentDay);
        currentDay++;
      }
    }
    calendar.push(week);

    // Fill the remaining weeks
    while (currentDay <= totalDays) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        if (currentDay <= totalDays) {
          week[i] = dayjs()
            .year(selectedYear)
            .month(selectedMonth)
            .date(currentDay);
          currentDay++;
        } else {
          week[i] = null; // Empty cells
        }
      }
      calendar.push(week);
    }

    return calendar;
  };

  const calendar = generateCalendar();
  const handleChangeCountry = (v) => {
    setSelectedCountry(v);
    var countryData = origData.filter(
      ({ sheetName, sheetData }) => sheetName === v
    );
    setData(origData.filter(({ sheetName, sheetData }) => sheetName === v));
    setRegulationList(
      Array.from(
        new Set(countryData[0].sheetData.map((row) => row["State Regulators"]))
      )
    );
    setDivisionList(
      Array.from(
        new Set(countryData[0].sheetData.map((row) => row["Report division"]))
      )
    );
  };
  return (
    <div className="p-4 relative">
      <div className="flex items-center mb-4 justify-between">
        <button
          onClick={toggleDatePicker}
          className="text-lg font-bold bg-green-500 text-white p-2 rounded flex items-center"
        >
          <FaCalendarAlt className="mr-2" />
          {selectedDate.format("MMMM D, YYYY")}
        </button>

        {/* Filters Section */}
        <div className="flex space-x-2">
          <select
            value={selectedCountry}
            onChange={(e) => handleChangeCountry(e.target.value)}
            className="border rounded p-2 bg-green-500 text-white"
          >
            {countryList.map((country) => {
              return (
                <option key={country} value={country}>
                  {country}
                </option>
              );
            })}

            {/* Add more countries as needed */}
          </select>

          <select
            value={selectedStateRegulator}
            onChange={(e) => setSelectedStateRegulator(e.target.value)}
            className="border rounded p-2 bg-green-500 text-white"
          >
            {regulationList.map((reg) => {
              return (
                <option key={reg} value={reg}>
                  {reg}
                </option>
              );
            })}
            {/* Add more regulators as needed */}
          </select>

          <select
            value={selectedReportDivision}
            onChange={(e) => setSelectedReportDivision(e.target.value)}
            className="border rounded p-2 bg-green-500 text-white"
          >
            {divisionList.map((div) => {
              return (
                <option key={div} value={div}>
                  {div}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {showDatePicker && (
        <div className="absolute bg-white border rounded shadow-lg p-4 z-10">
          {step === 0 && (
            <div className="mb-4">
              <h2 className="font-bold">Select Year</h2>
              <div className="flex items-center mb-2">
                <button
                  onClick={() => setYearOffset(yearOffset - 12)}
                  className="text-lg font-bold bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200"
                >
                  {"<"}
                </button>
                <div className="flex-grow">
                  <div className="grid grid-cols-3 gap-2">
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => handleYearChange(year)}
                        className="p-2 border rounded bg-green-500 text-white hover:bg-green-600 transition duration-200"
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setYearOffset(yearOffset + 12)}
                  className="text-lg font-bold bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200"
                >
                  {">"}
                </button>
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="mb-4">
              <h2 className="font-bold">Select Month</h2>
              <div className="flex items-center mb-2">
                <div className="flex-grow">
                  <div className="grid grid-cols-3 gap-2">
                    {months.map((month, index) => (
                      <button
                        key={month}
                        onClick={() => handleMonthChange(index)}
                        className="p-2 border rounded bg-green-500 text-white hover:bg-green-600 transition duration-200"
                      >
                        {month}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {step === 2 && selectedMonth !== null && (
            <div className="mb-4">
              <h2 className="font-bold color-black">Select Day</h2>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                  <div key={index} className="border p-2"></div> // Empty cells for days before the first of the month
                ))}
                {days.map((day) => (
                  <button
                    key={day.date()}
                    onClick={() => handleDateClick(day)}
                    className={`border p-2 border rounded bg-green-500 text-white hover:bg-green-600 transition duration-200${
                      day.isSame(dayjs(), "day") ? "bg-blue-200" : ""
                    } ${
                      day.isSame(tempDate, "day")
                        ? "rounded bg-green-500 text-white"
                        : "hover:bg-red-200"
                    }`}
                  >
                    {day.date()}
                  </button>
                ))}
              </div>
              <button
                onClick={confirmDateChange}
                className="mt-4 bg-green-500 text-white hover:bg-green-600 transition duration-200"
              >
                Confirm Date
              </button>
            </div>
          )}
        </div>
      )}

      {/* Display the full calendar based on the selected date */}
      <div className="mt-4">
        <h2 className="font-bold mb-2">
          {months[selectedDate.month()]} {selectedDate.year()}
        </h2>
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-bold">
              {day}
            </div>
          ))}
          {calendar.map((week, weekIndex) =>
            week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`h-20 border p-2 flex ${
                  day
                    ? day.isSame(selectedDate, "day")
                      ? "bg-green-500 text-white "
                      : "hover:bg-gray-200 items-center justify-center"
                    : ""
                }`}
                onClick={() => {
                  if(day.isSame(selectedDate, "day"))
                    navigate("/grid", {
                      state: data?.sheetData?.filter(
                        (row) =>
                          row["State Regulators"] === selectedStateRegulator &&
                          row["Report division"] &&
                          selectedReportDivision &&
                          
                          selectedDate.month() ===
                            dayjs("1899-12-30")
                              .add(row["Regulatory  Date"] - 1, "day")
                              .month() &&
                          selectedDate.date() ===
                            dayjs("1899-12-30")
                              .add(row["Regulatory  Date"] - 1, "day")
                              .date()
                      ),
                    });
                } }
              >
                {day ? ((
                   selectedDate.month() ===
                   day.month()&&
                 selectedDate.date() ===
                   
                    
                     day.date())? (
                      
                    
                    <>
                      {day.date()}
                      {console.log(data?.sheetData
                            ?.filter(
                              (row) =>
                                row["State Regulators"] ===
                                  selectedStateRegulator &&
                                row["Report division"] ===
                                selectedReportDivision &&

                              selectedDate.format("DD/MM")==
                              row["Regulatory Date"]
        
                               
                            ),selectedDate.format("DD/MM"))}
                      <div className="inherit flex w-auto flex-col text-gray-700 shadow-md w-auto rounded bg-clip-border">
                        <nav className="flex w-auto flex-col gap-1 p-0.5 font-sans text-base font-normal text-blue-gray-700">
                          {data?.sheetData
                            ?.filter(
                              (row) =>
                                row["State Regulators"] ===
                                  selectedStateRegulator &&
                                row["Report division"] ===
                                selectedReportDivision &&
        
                                day.month() ===
                                  dayjs("1899-12-30")
                                    .add(row["Regulatory  Date"] - 1, "day")
                                    .month() &&
                                day.date() ===
                                  dayjs("1899-12-30")
                                    .add(row["Regulatory  Date"] - 1, "day")
                                    .date()
                            )
                            .slice(0, 3)
                            .map((row) => (
                              <div
                                key={row["Regulator"] + row["Report Name"]}
                                className="relative grid select-none items-center whitespace-nowrap rounded-md bg-red-500 py-.5 px-1 font-sans text-xs font-bold uppercase text-white"
                              >
                                <span className="">
                                  {row["Regulator"]} - {row["Report Name"]}
                                </span>
                              </div>
                            ))}
                        </nav>
                      </div>
                    </>
                  ) : (
                    day.date()
                  )
                ) : (
                  ""
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
