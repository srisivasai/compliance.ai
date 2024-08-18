import React, {useState} from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,} from "@/components/ui/select"
import UploadReport from '@/components/UploadFile/UploadReport';

const UploadFile = () => {
    const [selectedItem, setSelectedItem] = useState('');

    const uploadItems = [
        {item: 'Reports', value: 'reports'}
    ]

  return (
    <div className='bg-background rounded-md p-5 min-h-full space-y-5'>
        <div className="flex items-center gap-4">
            <h1 className='whitespace-nowrap'>Upload Item:</h1>
            <Select onValueChange={setSelectedItem}>
                <SelectTrigger className="md:w-[250px]">
                    <SelectValue placeholder="Select Upload Item" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    {
                        uploadItems.map((item, index) => (
                            <SelectItem key={index} value={item.value}>{item.item}</SelectItem>
                        ))
                    }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
        
        {
            selectedItem === 'reports' && <UploadReport />
        }

    </div>
  )
}

export default UploadFile