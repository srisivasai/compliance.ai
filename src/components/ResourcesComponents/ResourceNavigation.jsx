import React, {useState, useEffect} from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,} from "@/components/ui/select"

const ResourceNavigation = () => {

  const [countries, setCountries] = useState([
    {country: 'Bangladesh', value: 'bangladesh'},
    {country: 'India', value: 'india'}
  ])

  const [bankNBFI, setBankNBFI] = useState([]);
  const [nbfiReportDivision, setNbfiReportDivision] = useState([])

  useEffect(() => {
    

  }, [countries])


  // const bankNBFI = [
  //   {item: 'Bank', value: 'bank'},
  //   {item: 'NBFI', value: 'nbfi'},
  //   {item: 'FI', value: 'fi'},
  //   {item: 'Bank & FI', value: 'bankAndFi'}
  // ]
  


  const sortedCountries = countries.sort((a, b) => a.country.localeCompare(b.country));
  const sortedBankNBFI = bankNBFI.sort((a, b) => a.item.localeCompare(b.item));

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

          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {sortedCountries.map((country, index) => (
                  <SelectItem key={index} value={country.value}>{country.country}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          
          {
            bankNBFI[0] && 
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select Bank/NBFI/FI" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {sortedBankNBFI.map((item, index) => (
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