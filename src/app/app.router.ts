import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './board/board.component';
import { TaskComponent } from './task/task.component';

const router: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
            title: 'Dashboard',
            searchAvailable: false
        }
    },
    {
        path: 'board', 
        component: BoardComponent,
        data: {
            title: 'Board',
            searchAvailable: true
        }
    },
    {
        path: 'task/:id', 
        component: TaskComponent,
        data: {
            title: 'test',
            searchAvailable: false
        }
    }
];

export const routes: any = RouterModule.forRoot(router);