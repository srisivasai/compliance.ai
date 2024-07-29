import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"

import ResourceNavigation from '@/components/ResourcesComponents/ResourceNavigation'
import JurisdictionAnalyzer from '@/components/ResourcesComponents/JurisdictionAnalyzer'
import ExpertConnection from '@/components/ResourcesComponents/ExpertConnection'

const Resources = () => {

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
