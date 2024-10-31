import {v4} from 'uuid'
import StatusEnum from './StatusEnum'
import PriorityEnum from './PriorityEnum'
export default class Mission {
    public id:string
    constructor(
        public name:string,
        public completed:  StatusEnum,
        priority:PriorityEnum,
        description:string
    ) {
        this.id = v4()
    }
}