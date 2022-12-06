import useSWR from "swr";
import {fetcher} from "./helper/fetcher";
import {endOfWeek, format} from "date-fns";

export default function useRegister (){

    const {data: games, error, isValidating,  mutate} = useSWR( `/api/games/`, fetcher, {focusThrottleInterval: 10000})
    const {data: club, error: clubError, isValidating: isClubValidating} = useSWR( `/api/club/`, fetcher, {focusThrottleInterval: 10000})
const nextGame = games?.filter((game)=>format(new Date(game.datum), 'dd MMM yyyy') === format(endOfWeek(new Date()), 'dd MMM yyyy'))

    return{
        games,
        nextGame,
        error,
        isValidating,
        mutate,
        club,
        clubError,
        isClubValidating
    }
}
