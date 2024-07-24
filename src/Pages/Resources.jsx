import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"

import ResourceNavigation from '@/components/ResourcesComponents/ResourceNavigation'
import JurisdictionAnalyzer from '@/components/ResourcesComponents/JurisdictionAnalyzer'
import ExpertConnection from '@/components/ResourcesComponents/ExpertConnection'

const Resources = () => {

  

  const bankNBFI = [
    {item: 'Bank'},
    {item: 'NBFI'},
    {item: 'FI'},
    {item: 'Bank & FI'}
  ]

  const bankReportDivision = [
    {item: 'Bangladesh Bank Regulations'},
    {item: 'Scheduled Bank'},
    {item: 'Foreign Exchange'},
    {item: 'Anti Money Laundering'},
    {item: 'Payment & Settlement'}
  ]

  const nbfiReportDivision = [
    {item: 'Others'},
    // {item: 'Scheduled Bank'},
    // {item: 'Foreign Exchange'},
    // {item: 'Anti Money Laundering'},
    // {item: 'Payment & Settlement'}
  ]

  // Bangladesh Bank Regulations -> BANK
  // Scheduled Bank -> BANK
  // Financial Institution -> FI
  // Banks And Financial Institutions -> Bank & FI
  // Managing Core Risk In Banks & FIs -> Bank & FI
  // Foreign Exchange -> BANK
  // Anti Money Laundering -> BANK /fi/ nbfi
  // Payment & Settlement -> BANK /fi/ nbfi
  // National Financial Inclusion Strategy -> NBFI
  // Others -> NBFI

  return (
    <div className="bg-background rounded-md p-5 min-h-full">
      <Tabs defaultValue="resourceNavigation" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
          <TabsTrigger value="resourceNavigation">Resource Navigation</TabsTrigger>
          <TabsTrigger value="jurisdictionAnalyzer">Jurisdiction Analyzer</TabsTrigger>
          <TabsTrigger value="expertConnection">Expert Connection</TabsTrigger>
        </TabsList>
        <TabsContent value="resourceNavigation">
          <ResourceNavigation />
        </TabsContent>
        <TabsContent value="jurisdictionAnalyzer">
          <JurisdictionAnalyzer />
        </TabsContent>
        <TabsContent value="expertConnection">
          <ExpertConnection />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Resources
