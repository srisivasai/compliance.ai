import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,} from "@/components/ui/select";
import { toast } from "sonner"
import { Button } from '@/components/ui/button';


const UploadReport = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const [bankNBFIList, setBankNBFIList] = useState([]);
  const [selectedBankNBFI, setSelectedBankNBFI] = useState('');

  const [nbfiReportDivisionList, setNBFIReportDivisionList] = useState([]);
  const [selectedNBFIReportDivision, setSelectedNBFIReportDivision] = useState('');

  useEffect(() => {
    const country = [
      { country: 'India', value: 'india' },
      { country: 'Bangladesh', value: 'bangladesh' },
    ];

    const sortedCountries = country.sort((a, b) => a.country.localeCompare(b.country));
    setCountriesList(sortedCountries);
  }, []);

  useEffect(() => {
    let bankNBFI = [];

    if (selectedCountry === 'bangladesh') {
      bankNBFI = [
        { item: 'Bank', value: 'bank' },
        { item: 'NBFI', value: 'nbfi' },
        { item: 'FI', value: 'fi' },
        { item: 'Bank & FI', value: 'bankAndFi' },
      ];
    } else if (selectedCountry !== '') {
      bankNBFI = [
        { item: 'Bank', value: 'bank' },
        { item: 'NBFI', value: 'nbfi' },
        { item: 'FI', value: 'fi' },
      ];
    }

    const sortedBankNBFI = bankNBFI.sort((a, b) => a.item.localeCompare(b.item));
    setBankNBFIList(sortedBankNBFI);
    setSelectedBankNBFI('');
  }, [selectedCountry]);

  useEffect(() => {
    let nbfiReportDivision = [];

    if (selectedBankNBFI === 'bank') {
      nbfiReportDivision = [
        { item: 'Bangladesh Bank Regulations', value: 'bangladeshBankRegulations' },
        { item: 'Scheduled Bank', value: 'scheduledBank' },
        { item: 'Foreign Exchange', value: 'foreignExchange' },
        { item: 'Anti Money Laundering', value: 'antiMoneyLaundering' },
        { item: 'Payment & Settlement', value: 'paymentAndSettlement' },
      ];
    } else if (selectedBankNBFI === 'nbfi') {
      nbfiReportDivision = [
        { item: 'Anti Money Laundering', value: 'antiMoneyLaundering' },
        { item: 'Payment & Settlement', value: 'paymentAndSettlement' },
        { item: 'National Financial Inclusion Strategy', value: 'nationalFinancialInclusionStrategy' },
        { item: 'Others', value: 'others' },
      ];
    } else if (selectedBankNBFI === 'fi') {
      nbfiReportDivision = [
        { item: 'Financial Institution', value: 'financialInstitution' },
        { item: 'Anti Money Laundering', value: 'antiMoneyLaundering' },
        { item: 'Payment & Settlement', value: 'paymentAndSettlement' },
      ];
    } else if (selectedBankNBFI === 'bankAndFi') {
      nbfiReportDivision = [
        { item: 'Banks And Financial Institutions', value: 'banksAndFinancialInstitutions' },
        { item: 'Managing Core Risk In Banks & FIs', value: 'managingCoreRisksInBanksAndFIs' },
      ];
    }

    const sortedNBFIReportDivision = nbfiReportDivision.sort((a, b) => a.item.localeCompare(b.item));
    setNBFIReportDivisionList(sortedNBFIReportDivision);
    setSelectedNBFIReportDivision('');
  }, [selectedBankNBFI]);

  const handleFileChange = (e) => {

    const selectedFile = e.target.files[0];

    if(!selectedFile || selectedCountry === "" || selectedBankNBFI === "" || selectedNBFIReportDivision === ""){
        toast.error("Upload Error", {
            description: "Select all options first",
        })
    } else if (selectedFile.type != 'application/pdf') {
        toast.error("Upload Error", {
            description: "Only PDF files are accepted",
        })
    } else {
        
    }

  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Upload Files</CardTitle>
        <CardDescription>Upload PDF files</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

          <Select onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-full m-1">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {countriesList.map((country, index) => (
                  <SelectItem key={index} value={country.value}>{country.country}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select value={selectedBankNBFI} onValueChange={setSelectedBankNBFI}>
            <SelectTrigger className="w-full m-1">
              <SelectValue placeholder="Select Bank/NBFI Value" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {bankNBFIList.map((item, index) => (
                  <SelectItem key={index} value={item.value}>{item.item}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select value={selectedNBFIReportDivision} onValueChange={setSelectedNBFIReportDivision}>
            <SelectTrigger className="w-full m-1">
              <SelectValue placeholder="Select Report Division" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {nbfiReportDivisionList.map((item, index) => (
                  <SelectItem key={index} value={item.value}>{item.item}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

        </div>

        <div className="mt-5">
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border border-muted-foreground border-dashed rounded-lg cursor-pointer bg-muted hover:muted-foreground">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Only PDF files are accepted</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange}/>
            </label>
          </div>
        </div>
        
      </CardContent>

    </Card>
  );
}

export default UploadReport;
