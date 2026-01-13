import React ,{useState}from 'react'

// Inside your Workshop component:
// Trigger every time 'modal' state changes

function Workshop() {
  const [selectedMachine, setSelectedMachine] = useState(null)
  const [modal, setModal] = useState(false)
  const machines=[
    {
      name:"Kafo VMC",
      Model:"Kafo VMC B3122",
      Description:"Kafo VMC B3122 is a vertical machining center that is used for machining various parts."
      ,Image:"https://www.kafo.com/images/products/kafo-vmc-b3122.jpg"
    },
    {
      name:"NeWay CNC",
      Model:"NeWay CNC Lathe",
      Description:"NeWay CNC Lathe is a lathe that is used for machining various parts.",
      Image:"https://www.neway.com/images/products/neway-cnc-lathe.jpg"
    },
    {
      name:"TOS Boring Machine",
      Model:"TOS WH-100",
      Description:"TOS Boring Machine is a boring machine that is used for boring various parts.",
      Image:"https://www.tos.com/images/products/tos-boring-machine.jpg"
    },
    {
      name:"TOS Boring Machine",
      Model:"TOS WH-80",
      Description:"TOS Milling Machine is a milling machine that is used for milling various parts.",
      Image:"https://www.tos.com/images/products/tos-milling-machine.jpg"
    },
    {
      name:"Lathe Machine",
      Model:"Lathe 18 Foot",
      Make:"Batala Punjab 2006",
      Description:"Lathe Machine is a lathe machine that is used for lathe various parts.",
      Image:"https://www.lathe.com/images/products/lathe-18-foot.jpg"
    },
    {
      name:"Lathe Machine",
      Model:"Lathe 12 Foot",
      Make:"Batala Punjab 2006",
      Description:"Lathe Machine is a lathe machine that is used for lathe various parts.",
      Image:"https://www.lathe.com/images/products/lathe-18-foot.jpg"
    },
    {
      name:"Lathe Machine",
      Model:"Lathe 9 Foot",
      Make:"Rajkot Gujarat 2016",
      Description:"Lathe Machine is a lathe machine that is used for lathe various parts.",
      Image:"https://www.lathe.com/images/products/lathe-18-foot.jpg"
    },
    {
      name:"Lathe Machine",
      Model:"Lathe 10 Foot",
      Make:"Rajkot Gujarat 2017",
      Description:"Lathe Machine is a lathe machine that is used for lathe various parts.",
      Image:"https://www.lathe.com/images/products/lathe-18-foot.jpg"
    },
    {
      name:"M1TR",
      Model:"M1TR",
      Make:"M1TR",
      Description:"M1TR is a M1TR machine that is used for M1TR various parts.",
      Image:"https://www.m1tr.com/images/products/m1tr.jpg"

    }
  ]
  const selectedMachineHandler=(index)=>{
    setSelectedMachine(index)
    console.log(selectedMachine)
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
    setSelectedMachine(null)
  }


  return (
    <>
      <header className="hero-container">
      {/* 1. The Video Background */}
      <video 
        src="/Headers/sage.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="back-video"
      />

      {/* 2. The Dark Overlay (Makes text easier to read) */}
      <div className="overlay"></div>

      {/* 3. The Content on top */}
      <div className="content">
        <h1 className="display-1 fw-bold text-white">Precision Engineering</h1>
        <p className="lead text-white">Quality services for your workshop needs.</p>
        <button className="btn btn-primary btn-lg">Explore Services</button>
      </div>
    </header>

      <section id="sec6">
        <div className="container">
          <div className="row">
            {machines.map((machine, index) => (
              <div className="col-lg-4" key={index} onClick={()=>selectedMachineHandler(machine)}>
                <div className="card">
                  <img src={machine.Image} alt={machine.name} />
                  <div className="card-body">
                    <h3>{machine.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    {modal && selectedMachine && (
      <div className="modal"  tabindex="-1" onClick={closeModal}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Machine Details</h5>
            <button type="button" className="btn-close" onClick={closeModal} data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-4">
                <img src={selectedMachine.Image} alt={selectedMachine.name} />
              </div>
              <div className="col-lg-8">
                <h5>{selectedMachine.name}</h5>
                <p>{selectedMachine.Model +" "&& +selectedMachine.Make}</p>
                <p>{selectedMachine.Make}</p>
                <p>{selectedMachine.Description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)}
    </>
  )
}

export default Workshop