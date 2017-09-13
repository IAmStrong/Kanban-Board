interface Reporter {
    id: string;
    name: string;
    email: string;
}

export interface ITask {
    id: number;
    name: string;
    description: string; 
    category: any;
    priority: string;
    tag: string;
    reporter: Reporter;
    watchers: string[];
    creation_date: string;
    due_date: string;
    estimated_time: string;
}