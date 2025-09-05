import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Index() {
  const [selectedOccupation, setSelectedOccupation] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side - Figma branding and title */}
        <div className="flex-1 space-y-6">
          {/* Figma logo */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 2C6.895 2 6 2.895 6 4C6 5.105 6.895 6 8 6H10V2H8Z"
                  fill="#F24E1E"
                />
                <path
                  d="M10 6H12C13.105 6 14 5.105 14 4C14 2.895 13.105 2 12 2H10V6Z"
                  fill="#FF7262"
                />
                <path
                  d="M10 6V10H8C6.895 10 6 9.105 6 8C6 6.895 6.895 6 8 6H10Z"
                  fill="#1ABCFE"
                />
                <path
                  d="M10 10V14H8C6.895 14 6 13.105 6 12C6 10.895 6.895 10 8 10H10Z"
                  fill="#0ACF83"
                />
                <path
                  d="M10 14V18C10 19.105 10.895 20 12 20C13.105 20 14 19.105 14 18C14 16.895 13.105 16 12 16C10.895 16 10 16.895 10 18V14Z"
                  fill="#A259FF"
                />
                <circle cx="16" cy="8" r="2" fill="#F24E1E" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold text-gray-900">
              Figma
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-emerald-400">
              Interactive
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-emerald-400">
              Dropdown
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-emerald-400">
              Component
            </div>
          </div>
        </div>

        {/* Right side - Dropdown component */}
        <div className="flex-1 max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <div className="space-y-3">
              <label className="text-lg font-medium text-gray-700 block">
                Occupation
              </label>

              <Select
                value={selectedOccupation}
                onValueChange={setSelectedOccupation}
              >
                <SelectTrigger className="w-full h-14 px-4 text-base border-2 border-gray-200 rounded-xl bg-white hover:border-gray-300 focus:border-blue-500 focus:ring-0 transition-colors">
                  <SelectValue
                    placeholder="Select Occupation"
                    className="text-gray-500"
                  />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-gray-200 rounded-xl shadow-lg">
                  <SelectItem
                    value="businessman"
                    className="h-12 px-4 text-base hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                  >
                    Businessman
                  </SelectItem>
                  <SelectItem
                    value="employee"
                    className="h-12 px-4 text-base hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                  >
                    Employee
                  </SelectItem>
                  <SelectItem
                    value="freelancer"
                    className="h-12 px-4 text-base hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                  >
                    Freelancer
                  </SelectItem>
                  <SelectItem
                    value="retired"
                    className="h-12 px-4 text-base hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                  >
                    Retired
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedOccupation && (
              <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                <p className="text-emerald-700 text-sm">
                  Selected:{" "}
                  <span className="font-medium">
                    {selectedOccupation.charAt(0).toUpperCase() +
                      selectedOccupation.slice(1)}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
