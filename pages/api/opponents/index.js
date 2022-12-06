import dbConnect from "../../../lib/mongo";
import Opponents from "../../../models/Opponents";


export default async function handler(req, res) {
    const {
        method,
        query: {opponent},

    } = req;


    await dbConnect()
    console.log('connected')
    if(method==="GET"){

        try {
            let opponents;
            if (opponent) {

                opponents = await Opponents.findOne(
                    {_id: opponent}
                );
            }else {
                opponents = await Opponents.find();
            }
            res.status(200).json(opponents);
        }catch(err){
            res.status(500).json(err)
        }

    }
    if(method==="POST"){


        try{
            const opponent = await Opponents.create(req.body);

            res.status(201).json(opponent)
        }catch(err){
            res.status(500).json(err);
        }
    }

    if(method === 'PUT'){
        const {items, addToTotal} = req.body

        try{
            const amendedOpponents =  await Opponents.findOneAndUpdate(
                {userId: opponent},
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
            res.status(200).json(amendedOpponents)
        }catch(err){
            res.status(500).json(err);
        }
    }
}

