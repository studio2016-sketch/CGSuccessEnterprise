'use client';
import {useState,type FormEvent} from 'react';
const services=['Strategic Consulting','Event Production','Organizational Systems','Partnership / Collaboration','Other'];
export default function InquiryForm(){
 const [fields,setFields]=useState({firstName:'',lastName:'',email:'',phone:'',organization:'',service:'',budget:'',timeline:'',message:''});
 const [status,setStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle');
 const set=(name:keyof typeof fields,value:string)=>setFields(prev=>({...prev,[name]:value}));
 const submit=async(event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault();setStatus('sending');
  try{
   const r=await fetch('/api/inquiry',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({
    name:(fields.firstName+' '+fields.lastName).trim(),email:fields.email,phone:fields.phone,organizationName:fields.organization,
    title:'CG Success inquiry — '+(fields.service||'New project'),message:fields.message,
    details:{service:fields.service,budget:fields.budget,timeline:fields.timeline}
   })});
   if(!r.ok)throw new Error('Unable to submit inquiry');setStatus('sent');
  }catch{setStatus('error')}
 };
 return <form className="inquiryForm" onSubmit={submit}><p className="eyebrow">YOUR INQUIRY</p><h2>Tell us about your vision.</h2><p className="formIntro">A few details will help us understand your project and route it to the right next step.</p>
 <div className="inquiryGrid">
 <label>FIRST NAME *<input value={fields.firstName} onChange={e=>set('firstName',e.target.value)} required autoComplete="given-name" maxLength={80}/></label>
 <label>LAST NAME *<input value={fields.lastName} onChange={e=>set('lastName',e.target.value)} required autoComplete="family-name" maxLength={80}/></label>
 <label>EMAIL *<input type="email" value={fields.email} onChange={e=>set('email',e.target.value)} required autoComplete="email" maxLength={160}/></label>
 <label>PHONE<input type="tel" value={fields.phone} onChange={e=>set('phone',e.target.value)} autoComplete="tel" maxLength={50}/></label>
 <label className="full">ORGANIZATION<input value={fields.organization} onChange={e=>set('organization',e.target.value)} autoComplete="organization" maxLength={160}/></label>
 <label className="full">WHAT CAN WE HELP WITH? *<select value={fields.service} onChange={e=>set('service',e.target.value)} required><option value="">Select an area of interest</option>{services.map(s=><option key={s}>{s}</option>)}</select></label>
 <label>PROJECT BUDGET<select value={fields.budget} onChange={e=>set('budget',e.target.value)}><option value="">Prefer not to say</option>{['Under $5,000','$5,000–$15,000','$15,000–$50,000','$50,000–$100,000','$100,000+','To be determined'].map(x=><option key={x}>{x}</option>)}</select></label>
 <label>IDEAL TIMELINE<select value={fields.timeline} onChange={e=>set('timeline',e.target.value)}><option value="">Select timeline</option>{['As soon as possible','Within 30 days','1–3 months','3–6 months','6+ months','Exploring options'].map(x=><option key={x}>{x}</option>)}</select></label>
 <label className="full">TELL US ABOUT YOUR PROJECT *<textarea value={fields.message} onChange={e=>set('message',e.target.value)} rows={6} required maxLength={4000} placeholder="Your vision, goals, location, event date (if applicable), and anything else we should know."/></label>
 </div>
 <button className="goldButton" type="submit" disabled={status==='sending'}>{status==='sending'?'SENDING…':status==='sent'?'INQUIRY RECEIVED ✓':'SEND MY INQUIRY →'}</button>
 <p className="formNote" role="status">{status==='sent'?'Thank you. Your inquiry has been received and routed for review.':status==='error'?'We could not submit your inquiry. Please try again.':'Your inquiry is sent securely into the CG Success client workflow.'}</p>
 </form>
}