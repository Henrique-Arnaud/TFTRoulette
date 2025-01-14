const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const champions = require('./championHandler.js');


app.use(cors());

app.get('/champions', (req, res)=>{
    res.json(champions.championList);
});

app.get('/champions/level/:playerLevel/roulette', (req, res)=>{
    let playerLevel = req.params.playerLevel.replace(/\D/g, "");
    res.json(champions.getPlayerRoulette(playerLevel));
});

app.get('/champions/level/:playerLevel', (req, res) =>{

    let playerLevel = req.params.playerLevel.replace(/\D/g, "");  
    res.json(champions.getChampionsByLevel(playerLevel));
});


app.get('/champions/cost/:championCost', (req, res) =>{

    let championCost = req.params.championCost.replace(/\D/g, "");
    res.json(champions.getChampionByCost(championCost));
});

app.post('/champions/:championName/roulette', (req, res) =>{
    champions.replaceChampion(req.params.championName);
    res.json({message: 'Funcionou'})
});

app.listen(port, () => {
    console.log(`Ouvindo na porta http://localhost:${port}`);
});