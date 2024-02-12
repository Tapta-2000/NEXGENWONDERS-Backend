const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/NEXGEN', {

    useNewUrlParser: true,

    useUnifiedTopology: false

})

    .then((result) => {

        console.log("connect");
        

    })

    .catch((error) => {

        console.log(error);

    })
const cors=require('cors');

    const express=require('express')

    const app=express();
    app.use(express.json());
    app.use(cors())

    const lapi=require('./models/laptop.model');

    app.post('/laptops',(req,res)=>
    {
        const lapdata= new lapi({...req.body}) ;
        lapdata.save().then(res=>console.log(res)).catch((er)=>
        {
            console.log(er)
        })
    });


    app.get('/laptops',async(req,res)=>
    {
        const lapdata= await lapi.find()
        res.send(lapdata);
        console.log(lapdata);
    })

    // for laptop reviews

    const laprev=require('./models/lapreview.model')
    app.post('/lapreviews',(req,res)=>
    {
        const lapdata= new laprev({...req.body}) ;
        lapdata.save().then(res=>console.log(res)).catch((er)=>
        {
            console.log(er)
        })
    });

    app.get('/lapreviews',async(req,res)=>
    {
        const lapdata= await laprev.find()
        res.send(lapdata);
        console.log(lapdata);
    })


    const mobrev=require('./models/mobreview.model')
    app.post('/mobreviews',(req,res)=>
    {
        const lapdata= new mobrev({...req.body}) ;
        lapdata.save().then(res=>console.log(res)).catch((er)=>
        {
            console.log(er)
        })
    });

    app.get('/mobreviews',async(req,res)=>
    {
        const lapdata= await mobrev.find()
        res.send(lapdata);
        console.log(lapdata);
    })


    const fridgerev=require('./models/fridgereview.model')
    app.post('/fridgereviews',(req,res)=>
    {
        const lapdata= new fridgerev({...req.body}) ;
        lapdata.save().then(res=>console.log(res)).catch((er)=>
        {
            console.log(er)
        })
    });

    app.get('/fridgereviews',async(req,res)=>
    {
        const lapdata= await fridgerev.find()
        res.send(lapdata);
        console.log(lapdata);
    })


    const headrev=require('./models/headreview.model')
    app.post('/headreviews',(req,res)=>
    {
        const lapdata= new headrev({...req.body}) ;
        lapdata.save().then(res=>console.log(res)).catch((er)=>
        {
            console.log(er)
        })
    });

    app.get('/headreviews',async(req,res)=>
    {
        const lapdata= await headrev.find()
        res.send(lapdata);
        console.log(lapdata);
    })


    const tvrev=require('./models/tvreview.model')
    app.post('/tvreviews',(req,res)=>
    {
        const lapdata= new tvrev({...req.body}) ;
        lapdata.save().then(res=>console.log(res)).catch((er)=>
        {
            console.log(er)
        })
    });

    app.get('/tvreviews',async(req,res)=>
    {
        const lapdata= await tvrev.find()
        res.send(lapdata);
        console.log(lapdata);
    })



    const acrev=require('./models/acreview.model')
    app.post('/acreviews',(req,res)=>
    {
        const lapdata= new acrev({...req.body}) ;
        lapdata.save().then(res=>console.log(res)).catch((er)=>
        {
            console.log(er)
        })
    });

    app.get('/acreviews',async(req,res)=>
    {
        const lapdata= await acrev.find()
        res.send(lapdata);
        console.log(lapdata);
    })

//all Reviews
    const mob=require('./models/mobiles.model')
    app.post('/mobiles',(req,res)=>
    {
        const lapdata= new mob({...req.body}) ;
        lapdata.save().then(res=>console.log(res)).catch((er)=>
        {
            console.log(er)
        })
    });

    const tv=require('./models/smarttv.model')
    app.post('/smarttv',(req,res)=>
    {
        const lapdata= new tv({...req.body}) ;
        lapdata.save().then(res=>console.log(res)).catch((er)=>
        {
            console.log(er)
        })
    });



    const ac=require('./models/ac.model');
    app.post('/acs',(req,res)=>
    {
        const lapdata= new ac({...req.body}) ;
        lapdata.save().then(res=>console.log(res)).catch((er)=>
        {
            console.log(er)
        })
    });
    const fridge=require('./models/fridge.model');

    app.post('/fridge',(req,res)=>
    {
        const lapdata= new fridge({...req.body}) ;
        lapdata.save().then(res=>console.log(res)).catch((er)=>
        {
            console.log(er)
        })
    });

    const hphone=require('./models/headphone.model');

    app.post('/headphone',(req,res)=>
    {
        const lapdata= new hphone({...req.body}) ;
        lapdata.save().then(res=>console.log(res)).catch((er)=>
        {
            console.log(er)
        })
    });



    const user=require('./models/userdetails.model')
    app.post('/userdetails',(req,res)=>
    {
        const lapdata= new user({...req.body}) ;
        lapdata.save().then(res=>console.log(res)).catch((er)=>
        {
            console.log(er)
        })
    });

    const cart=require('./models/cart.model')
    app.post('/Cart',(req,res)=>
    {
        const lapdata= new cart({...req.body}) ;
        lapdata.save().then(res=>console.log(res)).catch((er)=>
        {
            console.log(er)
        })
    });

    app.get('/Cart',async(req,res)=>
    {
        const lapdata= await cart.find()
        res.send(lapdata);
        console.log(lapdata);
    });




    app.get('/userdetails',async(req,res)=>
    {
        const lapdata= await user.find()
        res.send(lapdata);
        console.log(lapdata);
    });




    app.get('/headphone',async(req,res)=>
    {
        const lapdata= await hphone.find()
        res.send(lapdata);
        console.log(lapdata);
    })

    app.get('/fridge',async(req,res)=>
    {
        const lapdata= await fridge.find()
        res.send(lapdata);
        console.log(lapdata);
    })

    app.get('/mobiles',async(req,res)=>
    {
        const lapdata= await mob.find()
        res.send(lapdata);
        console.log(lapdata);
    })

    app.get('/smarttv',async(req,res)=>
    {
        const lapdata= await tv.find()
        res.send(lapdata);
        console.log(lapdata);
    })
    app.get('/acs',async(req,res)=>
    {
        const lapdata= await ac.find()
        res.send(lapdata);
        console.log(lapdata);
    })


    //delete api requests

    app.delete('/Cart/:id',async(req,res)=>
{
    try{

        console.log(req.params.id);
    
    const neu=await cart.findByIdAndDelete(req.params.id)
    if(!req.params.id)
    {
        return res.status(300).send()
    }
    res.send(neu);
}
catch(e)
{
    res.status(500).send(e) 
}
})




app.delete('/acs/:id',async(req,res)=>
{
    try{

        console.log(req.params.id);
    
    const neu=await ac.findByIdAndDelete(req.params.id)
    if(!req.params.id)
    {
        return res.status(300).send()
    }
    res.send(neu);
}
catch(e)
{
    res.status(500).send(e) 
}
})

app.delete('/fridge/:id',async(req,res)=>
{
    try{

        console.log(req.params.id);
    
    const neu=await fridge.findByIdAndDelete(req.params.id)
    if(!req.params.id)
    {
        return res.status(300).send()
    }
    res.send(neu);
}
catch(e)
{
    res.status(500).send(e) 
}
})


app.delete('/headphone/:id',async(req,res)=>
{
    try{

        console.log(req.params.id);
    
    const neu=await hphone.findByIdAndDelete(req.params.id)
    if(!req.params.id)
    {
        return res.status(300).send()
    }
    res.send(neu);
}
catch(e)
{
    res.status(500).send(e) 
}
})
  

app.delete('/mobiles/:id',async(req,res)=>
{
    try{

        console.log(req.params.id);
    
    const neu=await mob.findByIdAndDelete(req.params.id)
    if(!req.params.id)
    {
        return res.status(300).send()
    }
    res.send(neu);
}
catch(e)
{
    res.status(500).send(e) 
}
})


app.delete('/laptops/:id',async(req,res)=>
{
    try{

        console.log(req.params.id);
    
    const neu=await lapi.findByIdAndDelete(req.params.id)
    if(!req.params.id)
    {
        return res.status(300).send()
    }
    res.send(neu);
}
catch(e)
{
    res.status(500).send(e) 
}
})



app.delete('/smarttv/:id',async(req,res)=>
{
    try{

        console.log(req.params.id);
    
    const neu=await tv.findByIdAndDelete(req.params.id)
    if(!req.params.id)
    {
        return res.status(300).send()
    }
    res.send(neu);
}
catch(e)
{
    res.status(500).send(e) 
}
})

    app.listen(4000);