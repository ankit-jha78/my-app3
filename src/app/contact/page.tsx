'use client';
import React, { useState,FormEvent ,} from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
 function page2() {
interface data{
  email: string,
  message: string,
}

  const [state, setState]= useState<data>({
    email:"",
    message:"",
  });

  // const[email,setEmail]=useState('');
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setState({...state,[name]:value});
  };
    
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
  };

  return (
     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      {' '}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
       <h1 className="text-center text-2xl font-sans text-neutral-700">
        Contact us
       </h1>

       <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={state.email}
            name="email"
            onChange={(e)=>handleInput(e)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={state.message}
            onChange={handleInput}
            placeholder="Your message"
            name="message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
      
     </div>
  );
}
export default page2;