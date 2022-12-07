import {useEffect, useState} from 'react';
import axios from "axios";
import Select from "./Select";
const Opponents = ({label, naam, onChange}) => {
    const [oppo, setOppo] = useState([])
    useEffect(()=>{
        const getOppo = async() => {
           try{
               const res = await axios.get(`/api/opponents`)
               setOppo(res.data)
           }catch(err){
               console.log(err)
           }

        }
        getOppo()
    },[])
    return (
        <>
            <Select
                label={label} name={naam} data={oppo}  onChange={(e)=>onChange(oppo, e.target.value)}
            />
        </>
    );
};

export default Opponents;
