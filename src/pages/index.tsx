import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import { BiMicrophone, BiCamera } from 'react-icons/bi';

import React, { useState, useEffect, useRef } from 'react'
//import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
const inter = Inter({ subsets: ['latin'] })






      export default function  Home(props:InferGetServerSidePropsType<typeof getServerSideProps>){

      console.log(props)
      
        
  const [value,setvalue]=useState("");
      const [Fungi,setFungi]=useState(props.data);
      const [placeholder,setplaceholder]=useState("enter the name fungi");

    
          
       
         
 




      return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="rgb(216,180,254)" />
        </Head>
      
        <header className={`${styles.header} bg-cover text-white text-center flex-col justify-center h-80`}>
          <h1 className='pt-32'>KMCEDOF</h1>
          <span className=''>A Database of Fungi by Kirori Mal College</span>
          {/*created a search box todo implement image and voice search */}
          <form action={`http://localhost:3000/fungi/${value}`} method="post" className='flex justify-center'>
            <input value={value} list="fungi" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setvalue(e.target.value)} placeholder={placeholder} className='rounded-full w-8/12 p-2 mb-1 text-black outline-none' />{/*<BiMicrophone  className='text-blue-900  -translate-x-14 my-3'/><BiCamera className='text-blue-900  -translate-x-12 my-3'/>*/}</form>
          <datalist id='fungi'>
            {
              Fungi.map((item:any) => {
                return (<option key={item.fungi} value={item.fungi} />)
              })
            }

          </datalist>
        </header>
        <main className='p-3 flex'>
          {
            Fungi.map((item:any) => {
              return (
                <div key={item.fungi} className='border-2   h-48 lg:h-52 rounded-xl w-5/12 lg:w-3/12 p-2 m-2'>
                  <Link href={"./fungi/" + item.fungi}> <Image src={''} alt={item.fungi} className='w-fill h-24 bg-purple-200' />
                    <span className='font-bold italic'>{item.fungi}</span>
                    <p className=' line-clamp-2 lg:line-clamp-3 italic'>
                      {item.fungi}
                    </p></Link>
                </div>)
            })
          }




        </main>
        <footer className=' bg-purple-500 text-center pt-4 text-white'>
KMCEDOF <br/>
<div className='-translate-x-7'>follow us on:</div> 
        </footer>
      </>
      )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
 let data=await fetch(`http://192.168.0.139:3000/api/getfungus`).then(
    data => { return data.json() })
  return {
    props: { data}, // will be passed to the page component as props
  }
}