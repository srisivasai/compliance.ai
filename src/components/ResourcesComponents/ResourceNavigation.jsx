import React, {useState, useEffect} from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,} from "@/components/ui/select"

const ResourceNavigation = () => {

  const [countriesList, setCountriesList] = useState([])
  const [bankNBFIList, setBankNBFIList] = useState([]);
  const [nbfiReportDivisionList, setNbfiReportDivisionList] = useState([])

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedBankNBFI, setSelectedBankNBFI] = useState('');
  const [selectedNbfiReportDivisionList, setSelectedNbfiReportDivisionList] = useState('');

  useEffect(() => {
    setBankNBFIList([]);
    setNbfiReportDivisionList([]);
    setSelectedBankNBFI('');
    setSelectedNbfiReportDivisionList('');

    let country = [
      {country: 'India', value: 'india'},
      {country: 'Bangladesh', value: 'bangladesh'}, 
    ];

    const sortedCountries = country.sort((a, b) => a.country.localeCompare(b.country));

    setCountriesList(sortedCountries)

  }, [selectedCountry])

  useEffect(() => {
    setNbfiReportDivisionList([]);
    setSelectedNbfiReportDivisionList('');

    let bankNBFI = []

    if(selectedCountry === ''){
      bankNBFI = []
    }
    else if(selectedCountry === 'bangladesh'){
      bankNBFI = [
        {item: 'Bank', value: 'bank'},
        {item: 'NBFI', value: 'nbfi'},
        {item: 'FI', value: 'fi'},
        {item: 'Bank & FI', value: 'bankAndFi'}
      ]
    } else {
      bankNBFI = [
        {item: 'Bank', value: 'bank'},
        {item: 'NBFI', value: 'nbfi'},
        {item: 'FI', value: 'fi'},
      ]
    }

    const sortedBankNBFI = bankNBFI.sort((a, b) => a.item.localeCompare(b.item));
    setBankNBFIList(sortedBankNBFI)

  }, [selectedCountry])

  useEffect(()=>{
    let nbfiReportDivision = [];

    if(selectedBankNBFI === ''){
      nbfiReportDivision = []
    } else if (selectedBankNBFI === 'bank'){
      nbfiReportDivision = [
        {item: 'Bangladesh Bank Regulations', value: 'bangladeshBankRegulations'},
        {item: 'Scheduled Bank', value: 'scheduledBank'},
        {item: 'Foreign Exchange', value: 'foreignExchange'},
        {item: 'Anti Money Laundering', value: 'antiMoneyLaundering'},
        {item: 'Payment & Settlement', value: 'paymentAndSettlement'},

      ]
    } else if (selectedBankNBFI === 'nbfi'){
      nbfiReportDivision = [
        {item: 'Anti Money Laundering', value: 'antiMoneyLaundering'},
        {item: 'Payment & Settlement', value: 'paymentAndSettlement'},
        {item: 'National Financial Inclusion Strategy', value: 'nationalFinancialInclusionStrategy'},
        {item: 'Others', value: 'others'},
      ]
    } else if (selectedBankNBFI === 'fi'){
      nbfiReportDivision = [
        {item: 'Financial Institution', value: 'financialInstitution'},
        {item: 'Anti Money Laundering', value: 'antiMoneyLaundering'},
        {item: 'Payment & Settlement', value: 'paymentAndSettlement'},
      ]
    } else if (selectedBankNBFI === 'bankAndFi'){
      nbfiReportDivision = [
        {item: 'Banks And Financial Institutions', value: 'banksAndFinancialInstitutions'},
        {item: 'Managing Core Risk In Banks & FIs', value: 'managingCoreRisksInBanksAndFIs'},
      ]
    }

    const sortedNBFIReportDivision = nbfiReportDivision.sort((a, b) => a.item.localeCompare(b.item));
    setNbfiReportDivisionList(sortedNBFIReportDivision)

  }, [selectedBankNBFI])
  

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Navigation</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam doloremque animi?
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-5">

          <Select onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-full md:w-[200px]">
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
          
          {
            bankNBFIList[0] && 
            <Select onValueChange={setSelectedBankNBFI}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select Bank/NBFI/FI" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {bankNBFIList.map((item, index) => (
                    <SelectItem key={index} value={item.value}>{item.item}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          }

          {
            nbfiReportDivisionList[0] && 
            <Select onValueChange={setSelectedNbfiReportDivisionList}>
              <SelectTrigger className="w-[200px]">
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
          }
          


        </div>
        
      </CardContent>


    </Card>
  )
}

export default ResourceNavigation