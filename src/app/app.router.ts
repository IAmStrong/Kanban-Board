import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    }
];

export const routes: any = RouterModule.forRoot(router);