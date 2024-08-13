import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup,} from "@/components/ui/resizable"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import { cn } from '@/lib/utils'
import { FolderPlus, Mails, Printer, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from "@/components/ui/badge"


const ResourceNavigation = () => {
  const [divSize, setDivSize] = useState({left: 100, right: 0})
  const [panelKey, setPanelKey] = useState(+new Date());
  
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const [bankNBFIList, setBankNBFIList] = useState([]);
  const [selectedBankNBFI, setSelectedBankNBFI] = useState('');
  const [selectBankNBFIKey, setSelectBankNBFIKey] = useState(+new Date());

  const [nbfiReportDivisionList, setNBFIReportDivisionList] = useState([]);
  const [selectedNBFIReportDivision, setSelectedNBFIReportDivision] = useState('');
  const [selectedNBFIReportDivisionKey, setSelectedNBFIReportDivisionKey] = useState(+new Date());

  const [individualReportList, setIndividualReportList] = useState([]);
  const [selectedIndividualReport, setSelectedIndividualReport] = useState('');
  const [selectedIndividualReportKey, setSelectedIndividualReportKey] = useState(+new Date());

  const [isReadMore, setIsReadMore] = useState(false);
  const [seeMoreTagsTopics, setSeeMoreTagsTopics] = useState(false);
  const [seeMoreTagsConcepts, setSeeMoreTagsConcepts] = useState(false);

  const summary = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit suscipit, quas recusandae sunt minus accusamus incidunt et iusto qui atque harum cumque ratione, quae repudiandae reiciendis explicabo corporis. Fuga dolorum voluptatem, totam alias aut in, recusandae ut nobis fugit incidunt quod nesciunt voluptatibus unde? Esse minima consequuntur possimus eveniet labore omnis fugit deserunt necessitatibus, impedit adipisci, repellat mollitia quo tenetur soluta ut suscipit voluptatum blanditiis? Optio ab, libero dolore mollitia aliquid sunt nesciunt dolorem perspiciatis doloremque omnis? Beatae reprehenderit sit nihil illo ut ipsum officia, doloremque laudantium pariatur dolores, dolorem quis repellat porro. Accusamus harum unde quaerat, numquam, nam provident minima dolorum nostrum qui amet sint deleniti. A corrupti consectetur id eius temporibus cupiditate obcaecati, molestias suscipit dicta iste omnis blanditiis vel tempora quidem ut commodi soluta! Dolore a mollitia itaque perferendis debitis officia, iure laborum hic aliquam, repellat maxime ipsa pariatur, autem ducimus cumque et reiciendis. Delectus, inventore cupiditate!'
  const topics = ['Consumer Lending', 'Lending', 'Mortgage Lending', 'Another Topic'];
  const concepts = ['Assets Management: Artificial Intelligence', 'Assets Management: Asset Management', 'Assets Management: Bonds', 'Assets Management: Consumer Protectior', 'Assets Management: Defined Contributor', 'Assets Management: ESG', 'Assets Management: ESG-Governance']

  useEffect(() => {

    let country = [
      {country: 'India', value: 'india'},
      {country: 'Bangladesh', value: 'bangladesh'}, 
    ];

    const sortedCountries = country.sort((a, b) => a.country.localeCompare(b.country));

    setCountriesList(sortedCountries)

  }, [])

  useEffect(() => {

    let bankNBFI = [];

    if(selectedCountry === ''){

      bankNBFI = []

    } else if(selectedCountry === 'bangladesh'){

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

    setSelectedBankNBFI('');
    setSelectBankNBFIKey(+new Date());

  }, [selectedCountry])

  useEffect(() => {

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
    setNBFIReportDivisionList(sortedNBFIReportDivision)

    setSelectedNBFIReportDivision('');
    setSelectedNBFIReportDivisionKey(+new Date());

  }, [selectedBankNBFI])

  useEffect(() => {
    let reportList = [];

    if(selectedNBFIReportDivision === ''){
      reportList = []
    } else {
      reportList = [
        {item: 'Guidelines on Risk Based Capital Adequacy', value: 'guidelinesOnRiskBasedCapitalAdequacy'},
      ]
    }

    const sortedReportList = reportList.sort((a, b) => a.item.localeCompare(b.item));
    setIndividualReportList(sortedReportList);

    setSelectedIndividualReport('');
    setSelectedIndividualReportKey(+new Date());

  }, [selectedNBFIReportDivision])

  useEffect(() => {
    if(selectedIndividualReport !== ""){
      setDivSize({left: 65, right: 35})
      setPanelKey(+new Date())
    }
    
  }, [selectedIndividualReport])

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const toggleSeeMoreTopics = () => {
    setSeeMoreTagsTopics(!seeMoreTagsTopics);
  };

  const toggleSeeMoreConcepts = () => {
    setSeeMoreTagsConcepts(!seeMoreTagsConcepts);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Risk_Based_Capital_Adequac_(Revised_Regulatory_Capital_Framework_In_Line_With_Basel_III).pdf'; // Path to the PDF file in the public directory
    link.download = 'Risk Based Capital Adequac (Revised Regulatory Capital Framework In Line With Basel III).pdf'; // Name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const reportSections = [
    {
      heading: 'An Overview of Basel III',
      subheadings: [
        {
          heading: 'Strengthening the Capital Framework',
          subheadings: []
        },
        {
          heading: 'Enhancing Risk Coverage',
          subheadings: []
        },
        {
          heading: 'Supplementing The Risk-Based Capital Requirement With a Leverage Ratio',
          subheadings: []
        },
        {
          heading: 'Reducing Procyclicality and Promoting Countercyclical Buffers',
          subheadings: []
        },
        {
          heading: 'Addressing Systemic Risk and Interconnectedness',
          subheadings: []
        },
        {
          heading: 'Introducing a Global Liquidity Standard',
          subheadings: []
        },
        {
          heading: 'Transitional Arrangements',
          subheadings: []
        }
      ]
    },
    {
      heading: 'General Instructions on Capital Adequacy Framework',
      subheadings: [
        {
          heading: 'Capital to Risk-Weighted Asset Ratio',
          subheadings: []
        },
        {
          heading: 'Measurement of Risk-Weighted Asset',
          subheadings: []
        },
        {
          heading: 'Scope of Application',
          subheadings: []
        },
        {
          heading: 'Reporting Requirement',
          subheadings: []
        },
        {
          heading: 'Penalty for Non-Compliance',
          subheadings: []
        }
      ]
    },
    {
      heading: 'Constituents of Capital and Minimum Requirement',
      subheadings: [
        {
          heading: 'Components of Capital',
          subheadings: [
            {
              heading: 'Common Equity Tier 1 Capital',
              subheadings: []
            },
            {
              heading: 'Additional Tier 1 Capital',
              subheadings: []
            },
            {
              heading: 'Tier 2 Capital',
              subheadings: []
            }
          ]
        },
        {
          heading: 'Limits (Minima and Maxima)',
          subheadings: []
        },
        {
          heading: 'Capital Conservation Buffer',
          subheadings: []
        },
        {
          heading: 'Regulatory Adjustments/Deductions',
          subheadings: [
            {
              heading: 'Shortfall in provisions against NPLs and Investments',
              subheadings: []
            },
            {
              heading: 'Remaining deficit on account of revaluation of investments in securities',
              subheadings: []
            },
            {
              heading: 'Goodwill and all other Intangible Assets',
              subheadings: []
            },
            {
              heading: 'Deferred tax assets (DTA)',
              subheadings: []
            },
            {
              heading: 'Defined benefit pension fund assets',
              subheadings: []
            },
            {
              heading: 'Gain on sale related to securitization transactions',
              subheadings: []
            },
            {
              heading: 'Investment in own shares',
              subheadings: []
            },
            {
              heading: 'Reciprocal crossholdings in the Capital of Banking, Financial and Insurance Entities',
              subheadings: []
            },
            {
              heading: 'Investments in the Capital of Banking, Financial and Insurance Entities',
              subheadings: []
            },
            {
              heading: 'Investment in subsidiaries which are not consolidated',
              subheadings: []
            },
            {
              heading: 'Transitional Arrangements for Capital Deductions',
              subheadings: []
            }
          ]
        }
      ]
    },
    {
      heading: 'Leverage Ratio',
      subheadings: [
        {
          heading: 'Definition and Calculation of Leverage Ratio',
          subheadings: []
        },
        {
          heading: 'Capital Measure',
          subheadings: []
        },
        {
          heading: 'Exposure Measure',
          subheadings: []
        },
        {
          heading: 'Transitional Arrangements',
          subheadings: []
        }
      ]
    },
    {
      heading: 'Measurement of Risk Weighted Assets: Credit Risk',
      subheadings: [
        {
          heading: 'Introduction',
          subheadings: []
        },
        {
          heading: 'Definitions',
          subheadings: []
        },
        {
          heading: 'Methodology',
          subheadings: []
        },
        {
          heading: 'Risk Weight for Balance Sheet Exposure',
          subheadings: [
            {
              heading: 'External credit rating',
              subheadings: []
            }
          ]
        },
        {
          heading: 'Risk Weight for Off-Balance Sheet Exposure',
          subheadings: []
        },
        {
          heading: 'Credit Risk Mitigation (CRM)',
          subheadings: [
            {
              heading: 'Collateral for credit risk mitigation',
              subheadings: []
            },
            {
              heading: 'Guarantee for credit risk mitigation',
              subheadings: []
            },
            {
              heading: 'Proportional cover',
              subheadings: []
            },
            {
              heading: 'Currency mismatches',
              subheadings: []
            },
            {
              heading: 'Maturity mismatch',
              subheadings: []
            },
            {
              heading: 'Treatment of pools of CRM techniques',
              subheadings: []
            },
            {
              heading: 'CRM techniques for off balance sheet transaction',
              subheadings: []
            }
          ]
        }
      ]
    },
    {
      heading: 'Measurement of Risk Weighted Assets: Market Risk',
      subheadings: [
        {
          heading: 'Introduction',
          subheadings: []
        },
        {
          heading: 'Definitions',
          subheadings: []
        },
        {
          heading: 'Scope and Coverage of the Capital Charges',
          subheadings: []
        },
        {
          heading: 'Methodology',
          subheadings: []
        },
        {
          heading: 'Capital Charges for Interest Rate Risk',
          subheadings: [
            {
              heading: 'Capital charges for specific risk',
              subheadings: []
            },
            {
              heading: 'Capital charges for general market risk',
              subheadings: []
            },
            {
              heading: 'Repo / reverse-repo transaction',
              subheadings: []
            },
            {
              heading: 'Interest rate derivatives',
              subheadings: []
            }
          ]
        },
        {
          heading: 'Capital charges for equity position risk',
          subheadings: []
        },
        {
          heading: 'Capital charges for foreign exchange risk',
          subheadings: []
        }
      ]
    },
    {
      heading: 'Measurement of Risk Weighted Assets: Operational Risk',
      subheadings: [
        {
          heading: 'Introduction',
          subheadings: []
        },
        {
          heading: 'The Measurement Methodology',
          subheadings: []
        },
        {
          heading: 'The Basic Indicator Approach',
          subheadings: []
        },
        {
          heading: 'The Standardized Approach',
          subheadings: []
        }
      ]
    },
    {
      heading: 'Supervisory Review Process (SRP)',
      subheadings: [
        {
          heading: 'Introduction',
          subheadings: []
        },
        {
          heading: 'Board and senior management oversight',
          subheadings: []
        },
        {
          heading: 'Sound capital assessment',
          subheadings: []
        },
        {
          heading: 'Comprehensive assessment of risks',
          subheadings: []
        },
        {
          heading: 'Monitoring and Reporting',
          subheadings: []
        },
        {
          heading: 'Internal Control Review',
          subheadings: []
        },
        {
          heading: 'Stress Testing',
          subheadings: []
        },
        {
          heading: 'Capital Planning',
          subheadings: []
        }
      ]
    },
    {
      heading: 'Supervisory Review Evaluation Process',
      subheadings: [
        {
          heading: 'Introduction',
          subheadings: []
        },
        {
          heading: 'Principles of SREP of BB',
          subheadings: []
        },
        {
          heading: 'SRP – SREP Dialogue',
          subheadings: []
        },
        {
          heading: 'Methodology in Reviewing SRP',
          subheadings: [
            {
              heading: 'Review of adequacy of risk assessment',
              subheadings: []
            },
            {
              heading: 'Assessment of capital adequacy',
              subheadings: []
            },
            {
              heading: 'Assessment of the control environment',
              subheadings: []
            },
            {
              heading: 'Supervisory review of compliance with minimum standards',
              subheadings: []
            }
          ]
        },
        {
          heading: 'Supervisory Response',
          subheadings: []
        }
      ]
    },
    {
      heading: 'Market Discipline',
      subheadings: [
        {
          heading: 'Scope and Purpose',
          subheadings: []
        },
        {
          heading: 'Relations with Accounting Disclosures',
          subheadings: []
        },
        {
          heading: 'Materiality of Disclosure',
          subheadings: []
        },
        {
          heading: 'Frequency of Disclosure',
          subheadings: []
        },
        {
          heading: 'Disclosure Framework',
          subheadings: []
        }
      ]
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Navigation</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam doloremque animi?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResizablePanelGroup direction="horizontal" key={panelKey}>
          <ResizablePanel defaultSize={divSize.left}>
            <div className='grid grid-cols-4 gap-4 mr-5 '>

              <Select onValueChange={setSelectedCountry} >
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

              {
                bankNBFIList[0] &&

                <Select key={selectBankNBFIKey} value={selectedBankNBFI} onValueChange={setSelectedBankNBFI}>
                  <SelectTrigger className="w-full  m-1">
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
              }

              {
                nbfiReportDivisionList[0] &&

                <Select key={selectedNBFIReportDivisionKey} value={selectedNBFIReportDivision} onValueChange={setSelectedNBFIReportDivision}>
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
              }

              {
                individualReportList[0] &&

                <Select key={selectedIndividualReportKey} value={selectedIndividualReport} onValueChange={setSelectedIndividualReport}>
                  <SelectTrigger className="w-full m-1">
                    <SelectValue placeholder="Select Report" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {individualReportList.map((item, index) => (
                        <SelectItem key={index} value={item.value}>{item.item}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              } 

            </div> 
            
            {
              selectedIndividualReport &&

              <div className="mx-2 my-2 flex gap-10 overflow-x-auto">
                <div className='space-y-1 py-4 overflow-x-auto'>
                    <TOCItem reportSections = {reportSections}/>
                </div>

              </div>
            }

          </ResizablePanel>
          {
            selectedIndividualReport !== "" &&
            <>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={divSize.right} className={cn('bg-muted rounded-sm')}>
                {
                  selectedIndividualReport === "" ? 
                  <div className="w-full h-full flex items-center justify-center">
                    <h1 className="whitespace-nowrap">Select a Report First</h1>
                  </div>
                  :
                  <div className="w-full h-full p-5 space-y-5 max-h-[120vh] overflow-y-auto overflow-x-hidden">
                    <div className="w-full flex justify-between items-center">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <FolderPlus className="cursor-pointer"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Add to folder</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Mails className="cursor-pointer"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Send Email</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Printer className="cursor-pointer"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Print</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Download className="cursor-pointer"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Export</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="space-y-7">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Title</p>
                        <h1 className="font-semibold text-lg">Guidelines on Risk Based Capital Adequacy</h1>
                      </div>
                      <div className="w-full flex justify-center gap-3">
                        <Button className={cn('text-white')} onClick={handleDownload}>View PDF</Button>
                        <Button variant="outline" className={cn('')}>View Source Website</Button>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Summary</p>
                        <p>
                          {isReadMore ? summary : `${summary.substring(0, 200)}...`}
                          <span
                            className="text-blue-500 cursor-pointer"
                            onClick={toggleReadMore}
                          >
                            {isReadMore ? " Read Less" : " Read More"}
                          </span>
                        </p>
                      </div>
                      <div className="grid grid-cols-7 gap-y-5 gap-2">
                        <div className="col-span-3">
                          <h3 className="text-muted-foreground text-sm">Agency</h3>
                        </div>
                        <div className="col-span-4">
                          <h3 className="font-semibold">FDIC</h3>
                        </div>

                        <div className="col-span-3">
                          <h3 className="text-muted-foreground text-sm">Document ID</h3>
                        </div>
                        <div className="col-span-4">
                          <h3 className="font-semibold">3355D-4845DGGD</h3>
                        </div>

                        <div className="col-span-3">
                          <h3 className="text-muted-foreground text-sm">Document Type</h3>
                        </div>
                        <div className="col-span-4">
                          <h3 className="font-semibold">Examination Manual</h3>
                        </div>

                        <div className="col-span-3">
                          <h3 className="text-muted-foreground text-sm">Publication Date</h3>
                        </div>
                        <div className="col-span-4">
                          <h3 className="font-semibold">Friday, December 30th, 2022</h3>
                        </div>

                        <div className="col-span-3">
                          <h3 className="text-muted-foreground text-sm">Added to de.ai</h3>
                        </div>
                        <div className="col-span-4">
                          <h3 className="font-semibold">Wednesday, January 25th, 2023</h3>
                        </div>

                        <div className="col-span-3">
                          <h3 className="text-muted-foreground text-sm">Topics</h3>
                        </div>
                        <div className="col-span-4 flex gap-3 flex-wrap">
                          {
                            topics.slice(0, seeMoreTagsTopics ? topics.length : 3).map((topic, index) => (
                              <Badge key={index} className={cn('bg-muted-foreground hover:bg-muted-foreground')}>
                                {topic}
                              </Badge>
                            ))
                          }
                          {topics.length > 3 && !seeMoreTagsTopics && (
                            <span
                              className="text-primary text-sm cursor-pointer"
                              onClick={toggleSeeMoreTopics}
                            >
                              +{topics.length - 3} more
                            </span>
                          )}
                          {seeMoreTagsTopics && (
                            <span
                              className="text-primary text-sm cursor-pointer"
                              onClick={toggleSeeMoreTopics}
                            >
                              Show Less
                            </span>
                          )}
                        </div>

                        <div className="col-span-3">
                          <h3 className="text-muted-foreground text-sm">Concepts</h3>
                        </div>
                        <div className="col-span-4 flex flex-wrap gap-2">
                          {
                            concepts.slice(0, seeMoreTagsConcepts ? concepts.length : 3).map((concept, index) => (
                              <Badge key={index} className={cn('bg-muted-foreground hover:bg-muted-foreground')}>
                                {concept}
                              </Badge>
                            ))
                          }
                          {concepts.length > 3 && !seeMoreTagsConcepts && (
                            <span
                              className="text-blue-500 text-sm cursor-pointer"
                              onClick={toggleSeeMoreConcepts}
                            >
                              +{concepts.length - 3} more
                            </span>
                          )}
                          {seeMoreTagsConcepts && (
                            <span
                              className="text-blue-500 text-sm cursor-pointer"
                              onClick={toggleSeeMoreConcepts}
                            >
                              Show Less
                            </span>
                          )}
                        </div>

                      </div>
                      <div className='w-full flex items-center justify-center'>
                        <Link to="" className="text-primary hover:underline transition-all">Similar Documents (11557815)</Link>
                      </div>
                    </div>
                  </div>
                }
                
              </ResizablePanel>
            </>
          }

        </ResizablePanelGroup>
      </CardContent>
      
    </Card>
  )
}

export default ResourceNavigation



const TOCItem = ({ reportSections }) => {

  if(reportSections.length <=0 ){
    return <></>
  }

  const [selectedHeading, setSelectedHeading] = useState([]);

  const handleClick = (subheadings) => {
    setSelectedHeading(subheadings);
  };

  return (
    <div className="flex">
      <div>
        {reportSections.map((section, index) => (
          <h2 
            key={index} 
            className="cursor-pointer whitespace-nowrap transition-all hover:bg-secondary p-2" 
            onClick={() => handleClick(section.subheadings)}
          >
            {index + 1}. {section.heading}
          </h2>
        ))}
      </div>

      <div className="ml-4">
        <TOCItem reportSections={selectedHeading} />
      </div>

    </div>
  );
};
