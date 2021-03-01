import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FrameworksComponent} from './components/frameworks/frameworks.component';
import {FrameworksRoutingModule} from './frameworks-routing.module';
import {FrameworkEditPageComponent} from './pages/framework-edit/framework-edit.page';
import {FrameworkResolver} from '../../resolvers/framework.resolver';
import {FrameworksResolver} from '../../resolvers/frameworks.resolver';
import {HttpClient} from '@angular/common/http';
import {FrameworkService} from '../../services/framework.service';
import {FrameworkDummyService} from '../../services/framework-dummy.service';
import {SharedModule} from '../shared/shared.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {CompetenceService} from '../../services/competence.service';
import {CompetenceDummyService} from '../../services/competence-dummy.service';
import {ECompetencesResolver} from '../../resolvers/e-competences.resolver';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [FrameworksComponent, FrameworkEditPageComponent],
  imports: [
    CommonModule,
    FrameworksRoutingModule,
    SharedModule,
    MatExpansionModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatRadioModule,
    MatIconModule,
    PerfectScrollbarModule
  ],
  providers: [
    HttpClient,
    FormBuilder,
    FrameworksResolver,
    FrameworkResolver,
    ECompetencesResolver,
    FrameworkService,
    CompetenceService,
    FrameworkDummyService,
    CompetenceDummyService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: {suppressScrollX: true}
    }
  ]
})
export class FrameworksModule {
}
