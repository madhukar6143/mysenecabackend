const {findDisease,findSymptoms} = require('../mapping/finding');
const mapping = require('../../models/mapping')
let sym=0;
async function insertmap(disid,symid){
    
    symid.sort(function(a, b){return a-b});

    dis=await findDisease(symid)
    for(i=0;i<dis.length;i++){
      const sym1 = await findSymptoms(dis[i])
      sym1.sort(function(a, b){return a-b});
      if(await isEqual(symid,sym1)){
        sym++;
        break;
      
      }
    }
       async function isEqual(a, b)
        {
        return a.join() == b.join();
        }
    
           if(sym!=0){
            return false;
           }
            
           else{
              symid.sort(function(a, b){return a-b});
           for (let i = 0;i<symid.length;i++){ 
            mapping.create({ diseasesId: disid, symptomsId: symid[i] })
                .then(()=>{
                    console.log(diseasesId);
                })
                .catch((error)=>{
                    console.log(error)
                })
              }
             sym=0;
             console.log("hello")
              return  true;
        } 
      }
    module.exports = {insertmap};