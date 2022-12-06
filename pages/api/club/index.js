import dbConnect from "../../../lib/mongo";
import HomeClub from "../../../models/HomeClub";


export default async function handler(req, res) {
    const {
        method,
        query: {club},

    } = req;


    await dbConnect()

    if(method==="GET"){

        try {
            let clubs;
            if (club) {

                clubs = await HomeClub.findOne(
                    {_id: club}
                );
            }else {
                clubs = await HomeClub.find();
            }
            res.status(200).json(clubs);
        }catch(err){
            res.status(500).json(err)
        }

    }
    if(method==="POST"){


        try{
            const club = await HomeClub.create(req.body);

            res.status(201).json(club)
        }catch(err){
            res.status(500).json(err);
        }
    }

    if(method === 'PUT'){
        const {items, addToTotal} = req.body

        try{
            const amendedHomeClub =  await HomeClub.findOneAndUpdate(
                {userId: club},
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
            res.status(200).json(amendedHomeClub)
        }catch(err){
            res.status(500).json(err);
        }
    }
}

