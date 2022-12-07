import dbConnect from "../../../lib/mongo";
import Games from "../../../models/Games";

export default async function handler(req, res) {
    const {
        method,
        query: {id},

    } = req;


    await dbConnect()

    if(method === 'PUT'){

        const {price, quantity, _id}= req.body
        console.log(_id)
        try{
            const deleteGamesItem = await Games.updateOne(
                {_id: id},
                {
                    $pull: {
                        items: { _id}
                    },
                    $inc: {total: -(price*quantity)},

                },
                {safe: true})

            res.status(200).json(deleteGamesItem)
        }catch(err){
            res.status(500).json(err);
        }
    }

    if(method === 'DELETE'){

        try{
            const deleteGames =  await Games.findByIdAndDelete(id)
            //res.status(200).json("Games has been deleted...")
            res.status(200).json(deleteGames)
        }catch(err){
            res.status(500).json(err)
        }
    }

}
