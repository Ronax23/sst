import React from 'react'
import HeaderReusable from '../assets/Reusable/HeaderReusable'

function Terms() {
  // termsData.js
const termsAndConditions = [
  {
    id: 1,
    title: "Quality Assurance & Standards",
    description: "Our workshop operates under strict quality control protocols to ensure every component meets the industrial requirements of the power generation and tooling sectors.",
    bullets: [
      "All raw materials are inspected for metallurgical integrity before machining.",
      "Final products undergo a 3-step tolerance verification process.",
      "Material test certificates (MTC) can be provided upon prior request."
    ]
  },
  {
    id: 2,
    title: "Project Timelines & Delivery",
    description: "We strive to meet every deadline; however, precision engineering requires specific environmental and mechanical conditions that may affect scheduling.",
    bullets: [
      "Delivery dates are estimates starting from the date of advance payment.",
      "The company is not liable for delays caused by power grid failures or transit issues.",
      "Expedited 'Urgent' orders will incur a 20% surcharge on the total labor cost."
    ]
  },{
    id: 3,
    title: "Payment Terms & Delay Interest",
    description: "To maintain our supply chain and operational efficiency, we require strict adherence to payment schedules outlined in the Proforma Invoice.",
    bullets: [
      "Payments must be cleared within 7 business days of invoice generation.",
      "A delayed payment interest of 2% per month (calculated daily) will be applied to all overdue balances.",
      "Work on subsequent project phases will be paused until outstanding dues are settled."
    ]
  },
  {
    id: 4,
    title: "Storage & Component Rental",
    description: "Completed components must be collected or scheduled for delivery immediately upon notification of completion. Our workshop space is optimized for active production.",
    bullets: [
      "A grace period of 5 business days is provided after the 'Ready for Collection' notice.",
      "Post-grace period, a storage rental fee of ₹500 per component per day (or 0.5% of order value, whichever is higher) will apply.",
      "The company is not liable for minor surface oxidation (rust) on components left in storage for over 15 days without specialized coating."
    ]
  }
];
  return (
    <>
    <HeaderReusable title="Terms and Conditions" image="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"/>
      <div id="termsofterm">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h2 className='mb-5 h1 text-center'>Terms and Conditions <i class="bi bi-bluesky"></i></h2>
              {termsAndConditions.map((term) => (
                <div key={term.id} className="mb-4">
                  <h2 className='term-col'>{term.title} <i class="bi bi-bluesky"></i></h2>
                  <p>{term.description}</p>
                  {term.bullets && (
                    <ul>
                      {term.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Terms