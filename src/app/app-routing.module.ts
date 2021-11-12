import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'loginstudent',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'teacher-homepage',
    loadChildren: () => import('./teacher-homepage/teacher-homepage.module').then( m => m.TeacherHomepagePageModule)
  },
  {
    path: 'insert/:id',
    loadChildren: () => import('./insert/insert.module').then( m => m.InsertPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'insert2/:id',
    loadChildren: () => import('./insert2/insert2.module').then( m => m.Insert2PageModule)
  },
  {
    path: 'insert3/:id',
    loadChildren: () => import('./insert3/insert3.module').then( m => m.Insert3PageModule)
  },
  {
    path: 'graph',
    loadChildren: () => import('./graph/graph.module').then( m => m.GraphPageModule)
  },
  {
    path: 'graph',
    loadChildren: () => import('./graph/graph.module').then( m => m.GraphPageModule)
  },
  {
    path: 'edit-student/:id',
    loadChildren: () => import('./edit-student/edit-student.module').then( m => m.EditStudentPageModule)
  },
  {
    path: 'courseseletion',
    loadChildren: () => import('./courseseletion/courseseletion.module').then( m => m.CourseseletionPageModule)
  },
  {
    path: 'saccinsert1',
    loadChildren: () => import('./saccinsert1/saccinsert1.module').then( m => m.Saccinsert1PageModule)
  },
  {
    path: 'saccinsert2',
    loadChildren: () => import('./saccinsert2/saccinsert2.module').then( m => m.Saccinsert2PageModule)
  },
  {
    path: 'saccinsert3',
    loadChildren: () => import('./saccinsert3/saccinsert3.module').then( m => m.Saccinsert3PageModule)
  },
  {
    path: 'pinsert1',
    loadChildren: () => import('./pinsert1/pinsert1.module').then( m => m.Pinsert1PageModule)
  },
  {
    path: 'pinsert2',
    loadChildren: () => import('./pinsert2/pinsert2.module').then( m => m.Pinsert2PageModule)
  },
  {
    path: 'pinsert3',
    loadChildren: () => import('./pinsert3/pinsert3.module').then( m => m.Pinsert3PageModule)
  },
  {
    path: 'insertdata',
    loadChildren: () => import('./insertdata/insertdata.module').then( m => m.InsertdataPageModule)
  },
  {
    path: 'registerstudent',
    loadChildren: () => import('./registerstudent/registerstudent.module').then( m => m.RegisterstudentPageModule)
  },
  {
    path: 'loginstudent',
    loadChildren: () => import('./loginstudent/loginstudent.module').then( m => m.LoginstudentPageModule)
  },
  {
    path: 'homepagestudent',
    loadChildren: () => import('./homepagestudent/homepagestudent.module').then( m => m.HomepagestudentPageModule)
  },
  {
    path: 'registerstudent2',
    loadChildren: () => import('./registerstudent2/registerstudent2.module').then( m => m.Registerstudent2PageModule)
  },
  {
    path: 'list5cemerlang',
    loadChildren: () => import('./list5cemerlang/list5cemerlang.module').then( m => m.List5cemerlangPageModule)
  },
  {
    path: 'list5cerdik',
    loadChildren: () => import('./list5cerdik/list5cerdik.module').then( m => m.List5cerdikPageModule)
  },
  {
    path: 'list5bijak',
    loadChildren: () => import('./list5bijak/list5bijak.module').then( m => m.List5bijakPageModule)
  },
  {
    path: 'studentperformance/:id',
    loadChildren: () => import('./studentperformance/studentperformance.module').then( m => m.StudentperformancePageModule)
  },
  {
    path: 'edit-student2/:id',
    loadChildren: () => import('./edit-student2/edit-student2.module').then( m => m.EditStudent2PageModule)
  },
  {
    path: 'edit-student3/:id',
    loadChildren: () => import('./edit-student3/edit-student3.module').then( m => m.EditStudent3PageModule)
  },
  {
    path: 'insert4/:id',
    loadChildren: () => import('./insert4/insert4.module').then( m => m.Insert4PageModule)
  },
  {
    path: 'edit-student4/:id',
    loadChildren: () => import('./edit-student4/edit-student4.module').then( m => m.EditStudent4PageModule)
  },
  {
    path: 'settings2',
    loadChildren: () => import('./settings2/settings2.module').then( m => m.Settings2PageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FAQPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },






 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

