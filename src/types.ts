export interface ITask {
    id: number | undefined
    title: string
    description: string | null,
    status: Statuses
    userId: number | undefined
}
export interface IUser {
    id: number
    username: string
    tasks: ITask[]
}
export enum Statuses{
    IN_PROGRESS = 'In progress',
    COMPLETED = 'Completed',
    PENDING = 'Pending' 
}