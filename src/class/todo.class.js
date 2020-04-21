export class TodoClass {

    static fromJSON({id, task, completed, created}){
        let tempTODO = new TodoClass(task);
        tempTODO.id = id;
        tempTODO.completed = completed;
        tempTODO.created = created;
        return tempTODO;
    }

    constructor(task) {
        this.task = task;
        this.id = new Date().getTime();
        this.completed = false;
        this.created = new Date();
    }
}