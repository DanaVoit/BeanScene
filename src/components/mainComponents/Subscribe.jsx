import { SectionHeader } from "./SectionHeader";
import React, { useState } from "react";



function Subscribe() {
  const [message, setMessage] = useState('');
  const[email, setEmail]= useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === ""){
      alert("Please write correct email")
    }
    else{
      setMessage(`${email} succesfully add to subsctibe list!`);
       event.target.reset();

    }
 
    }


  return (
    <section className="subscribe">
      <div className="container subscribe-inner">
        <SectionHeader
          title="Subscribe to get the Latest News"
          dscrpt="Don’t miss out on our latest news, updates, tips and special offers"
        />
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Enter your mail" value={email} onChange={(event) =>
            setEmail(event.target.value)
          }></input>
          <button type="submit" className="btn" >
            Subscribe
          </button>

          <p className="main-txt">{message}</p>
         
        </form>
       
      </div>
    </section>
  );
}

export { Subscribe };
