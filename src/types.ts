export interface ITask {
    id: number
    title: string
    description: string | null,
    status: 'In progress' | 'Completed' | 'Awaits'
}
export interface IUser {
    id: number
    username: string
    tasks: ITask[]
}