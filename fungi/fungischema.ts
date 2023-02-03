import {Schema,model,models} from "mongoose";
interface IFungi {
  common_name: string;
  kingdom: string;
  phylum: string;
  class:string; 
  sub_class:string;
  order:string;
  sub_order:string;
  family:string;
  genus:string;
  benifits:string;
  how_to_cultivate:string;
  video_tutorial:string;
  image_coursol:Array<string>;
  precautions:string;
  disease:string;
  treatment:string;
}
const fungiSchema = new Schema({
  common_name: { type: String, required: true },
  fungi:{ type: String, required: true },
  kingdom: { type: String, required: true },
  phylum: { type: String, required: true },      
  class:{ type: String, required: true },
  sub_class:String,
  order:{ type: String, required: true },
  sub_order:String,
  family:{ type: String, required: true },
  genus:{ type: String, required: true },
  benifits:{ type: String, required: true },
  how_to_cultivate:{ type: String, required: true },
  video_tutorial:String,
  image_coursol: Array<string>,
  precautions:String,
  disease:String,
  treatment:String,
},{timestamps:true});
const Fungi = models.Fungi || model('Fungi', fungiSchema);
export default Fungi;


