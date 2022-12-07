import {useState} from 'react';
import axios from "axios";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import {format, subHours, subMinutes} from "date-fns";
import {useSession} from "next-auth/react";
import Link from "next/link";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";
const Index = ({oppo, team, club}) => {
    const {data: session, loading} = useSession()
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


        try{
            const res = await axios.post(`/api/games`,
                {...inputs, naam: selected.naam, address: selected.address, verzamelen: verzamelen, city: selected.city, club: selected.club, img: selected.img, vervoer: trans}
            )

        }catch(err){
            console.log(err)
        }

    }
    if(loading){
        return loading
    }
    if(!loading && !session){
        return (
            <div className={`flex flex-col h-screen w-screen items-center justify-center`}>
                <span className={`text-3xl bont-bold`}>Access Denied</span>
                <Link href={`/admin`}>
                    <button className={`text-white bg-blue-500 leading-none py-2 px-3 rounderd`}>Login</button>
                </Link>

            </div>
        )
    }
    return (


          <div className={`min-h-screen flex flex-col items-center justify-center`}>
              <div className={`flex justify-center py-4 `}>
                  <Link href={`/`}>
                      <button className={`flex items-center space-x-2 text-white text-xl py-3 px-4 bg-[#00763b] hover:bg-[#00763b]/80 leading-none rounded`}><ArrowLeftIcon className={`h-5 w-5`}/>Terug</button>
                  </Link>
              </div>
              <div className={`h-full w-full flex items-center justify-center`}>
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
                              {/*<div className={`flex flex-col space-y-1 text-slate-500`}>
                            <Select label={'Leeftijd'} data={numbers} name={'team'} naam={'groupLevel'}
                                    onChange={(e) => setInputs(prev => {
                                        return {...prev, [e.target.name]: team[0].groupLevel + '-' + e.target.value}
                                    })}
                            />

                        </div>*/}
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
                                  <Select label={`Vlaggen`} data={club[0].team} name={'vlaggen'} onChange={(e)=>  setInputs(prev=>{
                                      return {...prev, [e.target.name]: e.target.value} })}
                                  />
                              </div>


                          </div>

                          <div className={`flex w-full`}>
                              <div className={`flex flex-col space-y-1 text-slate-500`}>
                                  <Select label={`Vervoer`} data={club[0].team} multiple={true} name={'vervoer'} onChange={(e)=>handleTransport(e.target.value)}
                                  />



                              </div>
                          </div>
                      </div>
                      <div className={`flex justify-center`}>
                          <button className={`text-white bg-[#00763b]/80 hover:bg-[#00763b] py-2 px-3 rounded leading-none`} type={`submit`}>Submit</button>
                      </div>



                  </form>
              </div>

          </div>
    );
};

export default Index;
export async function getServerSideProps(ctx) {
    //const session = await getSession(ctx)
    /*if(!session){
        return{
            redirect: {
                destination: "/admin",
                permanent: false,
            }
        }
    }*/
    const host = ctx.req.headers.host;
    const res = await axios.get(`http://`+host+`/api/opponents`)
    const team = await axios.get(`http://`+host+`/api/age_group`)
    const club = await axios.get(`http://`+host+`/api/club`)



    return {
        props: {
            oppo: res.data,
            team: team.data,
            club: club.data
        },
    }
}
