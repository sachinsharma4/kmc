import React ,{useEffect,useState} from "react";
import Head from 'next/head'
import Image from 'next/image'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
const Fungi = (props:InferGetServerSidePropsType<typeof getServerSideProps>)=>{
    const [Fungi,setFungi]=useState(
      {common_name: "",
fungi: "",
kingdom: " ",
phylum: "",
class: "",
order: "",
family: "",
genus: "",
benifits: "",
how_to_cultivate: "",
video_tutorial: "../../public/m.mp4",
image_coursol: "",
precautions: "",
disease: "",
treatment: "",

});
   // const router =  useRouter();
 
    useEffect(()=>{setFungi(props.data)},[props.data])
 if(Fungi.common_name==""){
  return(
    <div>
    <h1>loading... </h1>
    </div>
  )
 }
return(
    <>
    <Head>
      <title>{Fungi.common_name}</title>
      <meta name="theme-color" content="rgb(216,180,254)" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    </Head>
<div className="flex text-xl flex-col overflow-x-hidden flex-wrap p-3 text-white bg-purple-900">
   
      <div>
     
        <div >
          <span><b className="">Kingdom</b>: {Fungi.kingdom}<br/></span>
          <span><b className="">Phylum</b> : {Fungi.phylum}<br/></span>
          <span><b className="">class</b> : {Fungi.class}<br/></span>
          <span><b className="">Order</b> : {Fungi.order}<br/></span>
          <span><b className="">Family</b>: {Fungi.family}<br/></span>
          <span><b className="">Genus</b> : {Fungi.genus}</span>
        </div>
     

    </div>
    <div className="flex max-w-full  flex-shrink-0 lg:w-2/5  lg:flex-col lg:min-h-screen lg:absolute lg:right-0 lg:items-center lg:p-4 ">
 
 <Image src={''} alt="image-1" className=' lg:w-4/5 lg:h-2/3 bg-purple-200 m-2' />
 <Image src={''} alt="image-2" className=' lg:w-4/5 lg:h-2/3 bg-purple-200 m-2' />
 <Image src={''} alt="image-3" className=' lg:w-4/5 lg:h-2/3 bg-purple-200 m-2' />
 <Image src={''} alt="image-4" className=' lg:w-4/5 lg:h-2/3 bg-purple-200 m-2' />
 <Image src={''} alt="image-5" className=' lg:w-4/5 lg:h-2/3 bg-purple-200 m-2' />

<div className="hidden lg:block  items-center "><hr className="my-2"/>
  if your a visual learner you may like this video tutorial
     
     <iframe className=" w-4/5 lg:h-48 my-4 mx-10" src="https://www.youtube.com/embed/6L_opWlW0Xo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> 
     </div>

 </div>

    <div className="max-w-full lg:max-w-lg">
    <h2  className="font-bold  my-4">Benefits</h2>
    <div dangerouslySetInnerHTML={{__html:Fungi.benifits}}></div>
    </div>

    <div className="how_to_cultivate max-w-full lg:max-w-lg">
    <h2 className="font-bold my-4">how to cultivate</h2>
     <div className="lg:hidden">if your a visual learner you may like this video tutorial
     <iframe src="" className="bg-yellow-400 my-4"></iframe>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/6L_opWlW0Xo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
    <div dangerouslySetInnerHTML={{__html:Fungi.how_to_cultivate}}></div>
    </div>


    <div className="my-4 max-w-full lg:max-w-lg">
    <h2  className="font-bold ">Precautions</h2>
    <div dangerouslySetInnerHTML={{__html:Fungi.precautions}}></div>
    </div>


    <div className="my-4 max-w-full lg:max-w-lg">
    <h2 className="font-bold ">Diseases of Mushroom Spawn:</h2>
    <div dangerouslySetInnerHTML={{__html:Fungi.disease}}></div>
    </div>
    

    </div>
  </>
)
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {fungi}=context.query;
  let data=await fetch(`http://192.168.0.139:3000/api/getfungus?fungi=${fungi}`).then(
     data => { return data.json() })
     data=data[0];
   return {
     props: { data}, // will be passed to the page component as props
   }
 }
export default Fungi;