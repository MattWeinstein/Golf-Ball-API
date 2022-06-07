const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let golfBalls = {
    "prov1":{
        "brand":"titleist",
        "color":"white",
        "swingSpeed": "medium",
        "stiffness":"soft",
        "quality":"great",        
    },
    "prov1x":{
        "brand":"titleist",
        "color":"white",
        "swingSpeed": "fast",
        "stiffness":"soft",
        "quality":"great",        
    },
    "v300":{
        "brand":"slazenger",
        "color":"white",
        "swingSpeed": "fast",
        "stiffness":"soft",
        "quality":"poor",        
    },
    "chromesoft":{
        "brand":"Callaway",
        "color":"white",
        "swingSpeed": "fast",
        "stiffness":"soft",
        "quality":"great",        
    },
    "ball":{
        "brand":"medium",
        "color":"white",
        "swingSpeed": "medium",
        "stiffness":"medium",
        "quality":"medium",        
    },
}


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/',(req,res)=>{
    res.json(golfBalls)
})

app.get('/api/:golfball',(req,res)=>{
    let golfBall = req.params.golfball.toLowerCase()
    if(!golfBalls[golfBall]){
        golfBall='ball'
    }
    res.json(golfBalls[golfBall])
})

app.listen(process.env.PORT||PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

// let rappers = {
//     '21 savage': {
//         'age': 28,
//         'birthName': 'Shéyaa Bin Abraham-Joseph',
//         'birthdate': '22 October 1992', 
//         'birthLocation': 'London, England',
//         'origin': 'Atlanta, Georgia',
//         'genre': 'hip hop, trap, rap, horrorcore',
//         'occupation': 'rapper, songwriter, record producer',
//         'yearsActive': '2013-present',
//         'labels': 'Epic, Slaughter Gang',
//         'children': 3
//     },
//     'chance the rapper':{
//         'age': 28,
//         'birthName': 'Chancelor Jonathan Bennett',
//         'birthdate': 'April 16, 1993', 
//         'birthLocation': 'London, England',
//         'origin': 'Chicago, Illinois',
//         'genre': 'hip hop, alternative hip hop, r & b',
//         'occupation': 'rapper, singer, song writer, record producer, activist, actor, philanthropist',
//         'yearsActive': '2011-present',
//         'labels': 'none',
//         'children': 0
//     },
//     'unknown':{
//         'age': 'unknown',
//         'birthName': 'unknown',
//         'birthdate': 'unknown', 
//         'birthLocation': 'unknown',
//         'origin': 'unknown',
//         'genre': 'unknown',
//         'occupation': 'unknown',
//         'yearsActive': 'unknown',
//         'labels': 'unknown',
//         'children': 'unknown'
//     }
// }

// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })

// app.get('/api/:name', (request, response) => {
//     const rapperName = request.params.name.toLowerCase()
//     if(rappers[rapperName]){
//         response.json(rappers[rapperName])
//     }else{
//         response.json(rappers['unknown'])
//     }
// })

// app.listen(process.env.PORT || PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })