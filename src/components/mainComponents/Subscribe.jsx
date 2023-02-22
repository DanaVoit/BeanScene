import { SectionHeader } from "./SectionHeader";

function Subscribe() {
   
 return(
  <section className="subscribe">
    <div className="container subscribe-inner">
      <SectionHeader
      title="Subscribe to get the Latest News"
      dscrpt="Don’t miss out on our latest news, updates, tips and special offers"/>

      <input  type="email" name="email" placeholder="Enter your mail" ></input>
      <button type="submit" className="btn">Subscribe</button>

    </div>
  </section>
 )

}

  export { Subscribe };