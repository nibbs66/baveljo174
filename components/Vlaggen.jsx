import {useEffect, useState} from 'react';
import axios from "axios";
import Select from "./Select";

const Vlaggen = ({label, name,  onChange}) => {
const [club, setClub] = useState([])
    useEffect(()=>{
        setClub([])
        const getVlaggen = async() => {
            try{
                const res = await axios.get(`/api/club`)

                setClub(res.data[0].team)
            }catch(err){
                console.log(err)
            }

        }
        getVlaggen()
    },[])

    return (
        <>
            <Select label={label} data={club} name={name} onChange={onChange}
            />
        </>
    );
};

export default Vlaggen;
