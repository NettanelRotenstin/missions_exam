
import StatusEnum from './StatusEnum'
import PriorityEnum from './PriorityEnum'
import { v4 } from 'uuid'
export default class Mission {
    public _id?: string
    constructor(
        public name: string,
        public status: StatusEnum | string,
        public priority: PriorityEnum | string,
        public description: string
    ) {

    }
}