import { act } from "react"
import {contactinterface} from '../Component/contactinterface'

export interface act{
    type:string,
    payload:contactinterface

}

export const create_contact=(data:contactinterface):act=>({
    type:"create_contact",
    payload:data
})
export const update_contact=(data:contactinterface):act=>({
    type:"update_contact",
    payload:data
})
export const delete_contact=(data:contactinterface):act=>({
    type:"delete_contact",
    payload:data
})
