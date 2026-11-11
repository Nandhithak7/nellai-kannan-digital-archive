'use client';
import {createContext,useContext,useEffect,useState,ReactNode} from 'react';
import type {Lang} from '@/data/archive';
const Ctx=createContext<{lang:Lang;setLang:(l:Lang)=>void}>({lang:'en',setLang:()=>{}});
export function LanguageProvider({children}:{children:ReactNode}){
 const [lang,setLangState]=useState<Lang>('en');
 useEffect(()=>{const saved=localStorage.getItem('nellaikannan-language');if(saved==='ta'||saved==='en')setLangState(saved)},[]);
 const setLang=(l:Lang)=>{setLangState(l);localStorage.setItem('nellaikannan-language',l)};
 return <Ctx.Provider value={{lang,setLang}}>{children}</Ctx.Provider>
}
export const useLanguage=()=>useContext(Ctx);
