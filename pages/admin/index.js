import {useState} from 'react';
import axios from "axios";
import Input from "../../components/Input";
import Select from "../../components/Select";
import {addHours, eachHourOfInterval, endOfToday, format, parseISO, startOfToday, subHours, subMinutes} from "date-fns";
const Index = ({oppo, team}) => {

    const [inputs, setInputs] = useState({})
    const [trans, setTrans] = useState([])
    const [selected, setSelected] = useState({})
    const location = [
        {naam: 'Thuis'},
        {naam: 'Uit'}
    ]
const numbers = [
    {naam: 1},
    {naam: 2},
    {naam: 3},
    {naam: 4},
    {naam: 5},
    {naam: 6},
    {naam: 7},
    {naam: 8},
    {naam: 9},
    {naam: 10},
    {naam: 11},
    {naam: 12},
    {naam: 13},
    {naam: 14},
    {naam: 15},
    {naam: 16},
]
    const handleTransport = (data) => {
      setTrans(prev=>[...prev, data])
    }
    const handleOpponent = (data) => {
        const selectedTeam = oppo.filter((team) => team.naam === data)
      setSelected(selectedTeam[0])
    }

const handleSubmit = async(e) => {
        e.preventDefault()
    let verzamelen;




    const meetingTime = new Date(`${format(new Date(), 'yyyy-MM-dd')} ${inputs.time}`);
      if(inputs.thuis === 'Thuis'){

            verzamelen = format(subMinutes(meetingTime, 30), 'H:mm')
        }else if(inputs.thuis === 'Uit'){
            verzamelen = format(subHours(meetingTime, 1), 'H:mm')
        }

        console.log(verzamelen)
    try{
           const res = await axios.post(`/api/games`,
               {...inputs, naam: selected.naam, address: selected.address, verzamelen: verzamelen, city: selected.city, img: selected.img, vervoer: trans}
               )

    }catch(err){
            console.log(err)
    }

}

    return (
        <div className={`h-screen w-full flex items-center justify-center`}>
            <form className={`flex flex-col bg-[ghostwhite] rounded-lg drop-shadow-xl p-10 space-y-5`} onSubmit={handleSubmit}>
                <div  className={`flex space-x-12 `}>
                    <div className={`flex flex-col space-y-1`}>
                        <div className={`flex flex-col space-y-1 `}>
                            <Input placeholder={'datum'} name={'datum'} label={'Datum'} type={'date'} onChange={(e)=>  setInputs(prev=>{
                                return {...prev, [e.target.name]: e.target.value} })}

                            />

                        </div>
                        <div className={`flex flex-col space-y-1 text-slate-500`}>
                            <Input placeholder={'Tijd'} name={'time'} label={'Tijd'} type={'time'} onChange={(e)=>  setInputs(prev=>{
                                return {...prev, [e.target.name]: e.target.value} })}
                            />

                        </div>
                        <div className={`flex flex-col space-y-1 text-slate-500`}>
                            <Select label={`Tegenstander`} name={'naam'} data={oppo}  onChange={(e)=>handleOpponent(e.target.value)}
                            />

                        </div>
                        <div className={`flex flex-col space-y-1 text-slate-500`}>
                            <Select label={team[0].groupLevel} data={numbers} name={'team'} onChange={(e)=>  setInputs(prev=>{
                                return {...prev, [e.target.name]: team[0].groupLevel+'-'+e.target.value} })}
                            />

                        </div>
                    </div>
                    <div className={`flex flex-col space-y-1`}>
                        <div className={`flex flex-col space-y-1 `}>
                            <Select label={`Thuis/Uit`} data={location} name={'thuis'} onChange={(e)=>  setInputs(prev=>{
                                return {...prev, [e.target.name]: e.target.value} })}
                            />

                        </div>
                        <div className={`flex flex-col space-y-1 text-slate-500`}>
                            <Input placeholder={'Veld'} label={'Veld'} type={'text'} name={`field`} onChange={(e)=>  setInputs(prev=>{
                                return {...prev, [e.target.name]: e.target.value} })}

                            />


                        </div>

                        <div className={`flex flex-col space-y-1 text-slate-500`}>
                            <Select label={`Vlaggen`} data={numbers} name={'vlaggen'} onChange={(e)=>  setInputs(prev=>{
                                return {...prev, [e.target.name]: e.target.value} })}
                            />
                        </div>


                    </div>

                    <div className={`flex w-full`}>
                        <div className={`flex flex-col space-y-1 text-slate-500`}>
                            <Select label={`Vervoer`} data={numbers} multiple={true} name={'vervoer'} onChange={(e)=>handleTransport(e.target.value)}
                            />



                        </div>
                    </div>
                </div>
                <div className={`flex justify-center`}>
                    <button className={`text-white bg-[#00763b]/80 hover:bg-[#00763b] py-2 px-3 rounded leading-none`} type={`submit`}>Submit</button>
                </div>



            </form>
        </div>
    );
};

export default Index;
export async function getServerSideProps(ctx) {
    const host = ctx.req.headers.host;
    const res = await axios.get(`https://`+host+`/api/opponents`)
    const team = await axios.get(`https://`+host+`/api/age_group`)



    return {
        props: {
            oppo: res.data,
            team: team.data
        },
    }
}
