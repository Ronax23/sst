import React from 'react'
import HeaderReusable from '../assets/Reusable/HeaderReusable';
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
function ContactUs() {
  const callig="/Headers/Contact.jpg";
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur"
  });
  const FormSucess = () => toast.success('Message sent successfully!');
  const onSubmit = data => {
    console.log(data);
    FormSucess();
    // Here you can handle the form submission, e.g., send the data to a server
  };
  const location=[28.35537457581717, 77.27498147598868]
  return (
   <>   
   <HeaderReusable title="Contact Us" image={callig}/>

      <section className="contact-section py-5">
        <div className="container">
          <div className="row justify-content-center">
             <div className="col-lg-6 col-12">
              <img src={callig} alt="" />
             </div>
            <div className="col-lg-6 col-12">
              <h2 className="text-center mb-4">Get in Touch</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
    <Toaster />
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Your Name" {...register("name", { required: true, maxLength: 20 })} />
        {errors.name?.type==="required" && <span className="text-danger">This field is required</span>}
        {errors.name?.type==="maxLength" && <span className="text-danger">Maximum length is 20 characters</span>}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="" {...register("email", { required: true,pattern:/@/ })} />
        {errors.email?.type==="required" && <span className="text-danger">This field is required</span>}
        {errors.email?.type==="pattern" && <span className="text-danger">Please enter a valid email address</span>}
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" rows="5" placeholder="Your Message" {...register("message", { required: true, maxLength: 150, minLength: 10 })}></textarea>
        {errors.message?.type=="required" && <span className="text-danger">This field is required</span>}
        {errors.message?.type=="maxLength" && <span className="text-danger">Maximum length is 150 characters</span>}
        {errors.message?.type=="minLength" && <span className="text-danger">Minimum length is 10 characters</span>}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
   </form>
              </div>
            
             </div>
             </div>
             </section>

      <section className="map-section py-5">
        <div className="container-fluid p-0 overflow-hidden">
    <MapContainer center={location} zoom={20} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
    </MapContainer>
   </div>
      </section>
   
   </>
  )
}

export default ContactUs