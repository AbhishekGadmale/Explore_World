const Contact = () => {
    const handleFormSubmit = (formData)=>{
        const formInputData= Object.fromEntries(formData.entries())
        console.log(formInputData);
    }
return(
   <section className="section-contact">
    <h2 className="container-title">Contact Us</h2>
    <div className="contact-wrapper container">
    <form action={handleFormSubmit}>
        <input type="text" required placeholder="Enter Your Name" name="userName" autoComplete="false"/>
        <input type="email" required placeholder="Enter Email" name="email" autoComplete="false"/>
        <textarea name="message" rows={10} autoComplete="false" placeholder="Enter Your Message" ></textarea>
        <button type="submit" >Submit</button>
    </form>
     
    </div>
   </section>
)
}
export default Contact;