import {v4} from 'uuid'
import StatusEnum from './StatusEnum'
export default class Mission {
    public id:string
    constructor(
        public name:string,
        public completed:  StatusEnum,
        priority:     
    ) {
        this.id = v4()
    }
}