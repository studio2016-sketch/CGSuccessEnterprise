'use client';
import {useState,type FormEvent} from 'react';
const destination=process.env.NEXT_PUBLIC_INQUIRY_EMAIL?.trim()||'info@cgsuccessenterprise.com';
const services=['Strategic Consulting','Event Production','Organizational Systems','Partnership / Collaboration','Other'];
export default function InquiryForm(){
 const [fields,setFields]=useState({firstName:'',lastName:'',email:'',phone:'',organization:'',service:'',budget:'',timeline:'',message:''});
 const [ready,setReady]=useState(false);
 const set=(name:keyof typeof fields,value:string)=>setFields(prev=>({...prev,[name]:value}));
 const submit=(event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault();if(!destination)return;
  const subject='CG Enterprises inquiry — '+(fields.service||'New project')+' — '+fields.firstName+' '+fields.lastName;
  const body=['NEW CG ENTERPRISES INQUIRY','','Name: '+fields.firstName+' '+fields.lastName,'Email: '+fields.email,'Phone: '+(fields.phone||'Not provided'),'Organization: '+(fields.organization||'Not provided'),'Interest: '+fields.service,'Estimated budget: '+(fields.budget||'Not specified'),'Timeline: '+(fields.timeline||'Not specified'),'','PROJECT DETAILS',fields.message,'','Sent from CG Enterprises website inquiry form.'].join('\n');
  const href='mailto:'+encodeURIComponent(destination)+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  setReady(true);window.location.href=href;
 };
 return <form className="inquiryForm" onSubmit={submit}><p className="eyebrow">YOUR INQUIRY</p><h2>Tell us about your vision.</h2><p className="formIntro">A few details will help us understand your project. For now, submitting opens your email app with a prepared message for you to review and send.</p>
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
 {destination?<><button className="goldButton" type="submit">PREPARE MY INQUIRY ↗</button><p className="formNote" role="status">{ready?'Your email app should open with the prepared inquiry. Please press Send there; this site has not sent it automatically.':'Your email app will open so you can review and send your inquiry. Nothing is transmitted by this website.'}</p><a className="textLink" href={'mailto:'+destination}>OR EMAIL US DIRECTLY ↗</a></>:<div className="launchNotice" role="status">Our inquiry email is being connected. Please check back shortly. No information entered here is stored or transmitted.</div>}
 </form>
}