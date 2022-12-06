import dbConnect from "../../../lib/mongo";
import AgeGroup from "../../../models/AgeGroup";


export default async function handler(req, res) {
    const {
        method,


    } = req;


    await dbConnect()

    if(method==="GET"){

        try {
            let ageGroups;

                ageGroups = await AgeGroup.find();

            console.log(res.statusCode)
            res.status(200).json(ageGroups);
        }catch(err){
            res.status(500).json(err)
        }

    }
    if(method==="POST"){


        try{
            const ageGroup = await AgeGroup.create(req.body);

            res.status(201).json(ageGroup)
        }catch(err){
            res.status(500).json(err);
        }
    }

    if(method === 'PUT'){
        const {items, addToTotal} = req.body

        try{
            const amendedAgeGroup =  await AgeGroup.findOneAndUpdate(
                {userId: ageGroup},
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
            res.status(200).json(amendedAgeGroup)
        }catch(err){
            res.status(500).json(err);
        }
    }
}

