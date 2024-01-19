import { makeAutoObservable } from 'mobx'
import { ITask, IUser } from '../types'
class Storage{
    constructor(){
        makeAutoObservable(this)
    }
    _server = 'https://todo-list-server-ipqw.vercel.app/api/'
    get server(){
        return this._server
    }
    _tasks: ITask[] = []
    get tasks(){
        return this._tasks
    }
    setTasks = (tasks: ITask[]) => {
        this._tasks = tasks
    }
    addTask = (task: ITask) => {
        this._tasks.push(task)
    }
    downloadTasksData = async () => {
        const response: Promise<IUser> | void = await fetch(`${this.server}user/${localStorage.getItem('username')}`, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(res => this.setTasks(res.tasks))
        .catch((err: Error) => {
            console.error(`Error: ${err}`)
        })
        return response
    }
    registration = async (username: string) => {
        const response: Promise<IUser> | void = await fetch(`${this.server}user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username})
        })
        .then(res => res.json())
        .then(res => this.setTasks(res.tasks))
        .catch((err: Error) => {
            console.error(`Error: ${err}`)
        })
        return response
    }
    updateTask = async ({id, title, description, status}: ITask) => {
        const response: Promise<ITask> | void = await fetch(`${this.server}task/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, description, status})
        })
        .then(res => res.json())
        .then(() => this.downloadTasksData())
        .catch((err: Error) => {
            console.error(`Error: ${err}`)
        })
        return response
    }
}
export const store = new Storage()