export default function handler(req, res) {
    //Here we put the filter i guess....! Maybe not here we gonna see which way is BETTER
    if(req.method === 'GET') {
      res.status(200).json(personal)
    }

    if(req.method === 'POST') {
      personal = {...req.body}
      res.status(200).json(personal)
    }
}

let personal = {
    name: 'Taki Snani',
    myBag: [],
    myLiked: [],
    budget: 2490.33
}   
