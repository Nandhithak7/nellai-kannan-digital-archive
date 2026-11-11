'use client';
import {ReactNode} from 'react';import {useLanguage} from './LanguageProvider';import {nav} from '@/data/archive';
export function PageIntro({slug,sub,subTa}:{slug:string;sub:string;subTa:string}){const {lang}=useLanguage();const item=nav.find(x=>x[0]===slug);return <div className="page-intro"><div className="eyebrow">THE NELLAI KANNAN ARCHIVE · {lang==='en'?'RESEARCH & MEMORY':'ஆய்வும் நினைவும்'}</div><h1>{lang==='en'?item?.[1]:item?.[2]}</h1><p>{lang==='en'?sub:subTa}</p><div className="intro-rule"><span/></div></div>}
export function Section({children,className=''}:{children:ReactNode;className?:string}){return <section className={`section ${className}`}>{children}</section>}
export function SectionHeading({kicker,title,titleTa}:{kicker:string;title:string;titleTa:string}){const {lang}=useLanguage();return <div className="section-heading"><span className="eyebrow">{kicker}</span><h2>{lang==='en'?title:titleTa}</h2></div>}
