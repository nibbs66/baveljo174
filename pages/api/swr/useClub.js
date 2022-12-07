import useSWR from "swr";
import {fetcher} from "./helper/fetcher";


export default function useRegister (){


    const {data: club, error: clubError, isValidating: isClubValidating} = useSWR( `/api/club/`, fetcher)


    return{

        club,
        clubError,
        isClubValidating
    }
}
