import { makeAutoObservable } from 'mobx'
class Storage{
    constructor(){
        makeAutoObservable(this)
    }
}
export const store = new Storage()