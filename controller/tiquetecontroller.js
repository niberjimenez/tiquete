import tiquetes from '../module/tiquete.js'
export async function obtener(req,res) {
    const tiquete = await tiquetes.find()
    res.json(tiquete)
}

export async function crear(req,res) {
   try{
    const {documentopasajero,
        nombrepasajero,
        placavehiculo,
        origen,
        destino} = req.body
        const newtiquete = new tiquetes({
            documentopasajero,
        nombrepasajero,
        placavehiculo,
        origen,
        destino
        })
        await newtiquete.save()
        res.json('tiquete creado')
   }catch(error){
    res.json('problem')
   }
}

export async function editar(req,res) {
    try{
    const {documentopasajero,
        nombrepasajero,
        placavehiculo,
        origen,
        destino} = req.body 
        await tiquetes.findOneAndUpdate({documentopasajero:documentopasajero},{nombrepasajero:nombrepasajero,placavehiculo:placavehiculo,origen:origen,destino:destino})
        res.json('tiquete actualizado ')
    }catch(error){
        res.json('problem ')
    }
}

export async function eliminar(req,res) {
    try{
        const _id = req.params.id
        await tiquetes.findByIdAndDelete(_id)
        res.json('tiquete eliminado')
    }catch(error){
        res.json('problem')
    }
}
