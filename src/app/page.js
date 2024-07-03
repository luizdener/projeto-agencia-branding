'use client'
import { useState } from "react";

import styles from "./page.module.css";

import Banner from "@/components/Banner";
import Topo from "@/components/Topo"

import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import Informacoes from "@/components/Informacoes";
import Rodape from "@/components/Rodape";

export default function Home() {

  const [mode, setMode] = useState('claro')
  const [iconMode, setIconMode] = useState(BsMoonStarsFill)

  function alterarModo(){
    switch(mode){
        case 'claro':
            setMode('escuro')
            setIconMode(BsSunFill)
            break
        case 'escuro':
            setMode('claro')
            setIconMode(BsMoonStarsFill)
            break
        default:
            break
    }
}

  return (
    <main className={styles.main}>
      <Topo mode={mode} handleChange={alterarModo} iconMode={iconMode}/>

      <Banner mode={mode}/>

      <Informacoes mode={mode}/>

      <Rodape mode={mode}/>
    </main>
  );
}
