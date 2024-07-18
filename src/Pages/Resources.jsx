import React from 'react'

const Resources = () => {

  const country = [
    {country: 'Bangladesh'}
  ]

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
    <div className="bg-background rounded-md p-5">
      Resources
    </div>
  )
}

export default Resources
