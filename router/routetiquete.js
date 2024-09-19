import Router  from "express";
const routertiquete = new Router()

import {obtener,crear,editar,eliminar} from '../controller/tiquetecontroller.js'

routertiquete.get('/',obtener)
routertiquete.put('/',editar)
routertiquete.post('/',crear)
routertiquete.delete('/:id',eliminar)

export default routertiquete