import dbConnect from "../../../lib/mongo";
import Games from "../../../models/Games";


export default async function handler(req, res) {
    const {
        method,
        query: {game},

    } = req;


    await dbConnect()

    if(method==="GET"){

        try {
            let games;
            if (game) {

                games = await Games.findOne(
                    {_id: game}
                );
            }else {
                games = await Games.find();
            }
            res.status(200).json(games);
        }catch(err){
            res.status(500).json(err)
        }

    }
    if(method==="POST"){


        try{
            const game = await Games.create(req.body);

            res.status(201).json(game)
        }catch(err){
            res.status(500).json(err);
        }
    }

    if(method === 'PUT'){
        const {items, addToTotal} = req.body

        try{
            const amendedGames =  await Games.findOneAndUpdate(
                {userId: game},
                {
                    $push: {items: {
                            productId: items.productId, quantity: items.quantity, color: items.color,
                            size: items.size, name: items.name, modelId: items.modelId,
                            img: items.img, price: items.price, vendor: items.vendor,
                            subTypeId: items.subTypeId,
                        }},
                    $inc: {total: addToTotal},
                    new: true
                }
            )
            res.status(200).json(amendedGames)
        }catch(err){
            res.status(500).json(err);
        }
    }
}

