import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Framework} from '../../../../models/framework';
import {ActivatedRoute, Router} from '@angular/router';
import {ECompetence, ECompetenceArea} from '../../../../models/e-competence';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {AbstractFormComponent} from '../../../shared/components/abstract-form/abstract-form.component';
import {FrameworkService} from '../../../../services/framework.service';
import {Spinner} from '../../../../utils/spinner/spinner-utils';
import {APP_ROUTES} from '../../../../app-routes';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworkComponent extends AbstractFormComponent implements OnInit {

  @Input() framework: Framework;
  @Input() eCompetences: ECompetence[];

  frameworkForm: FormGroup;
  selectedArea: ECompetenceArea;
  chosenECompetences: ECompetence[];
  filteredECompetences: ECompetence[];

  selectedCompetenceIndex: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private service: FrameworkService
  ) {
    super();
  }

  ngOnInit(): void {
    this.frameworkForm = this.initForm();
    this.fillCompetences();
  }

  private initForm(): FormGroup {
    return this.fb.group({
      title: this.fb.control(this.framework.title, Validators.required),
      competences: this.fb.array([])
    }, {updateOn: 'blur'});
  }

  private fillCompetences(): void {
    this.framework.competences
      .forEach(competence =>
        this.competenceList.push(this.fb.group({
          title: this.fb.control(competence.title, Validators.required),
          eCompetences: this.fb.control(competence.eCompetences)
        })));
  }

  @Spinner()
  async onApply(): Promise<boolean> {
    await this.service.save({...this.frameworkForm.getRawValue()});

    return this.router.navigate(['/', APP_ROUTES.PATH.FRAMEWORKS]);
  }

  onChoose(competenceControl: AbstractControl, index: number): void {
    this.chosenECompetences = competenceControl.get('eCompetences').value;
    this.selectedCompetenceIndex = index;

    if (this.isSelected()) {
      this.filterECompetence();
    }
  }

  filterECompetence(): void {
    this.filteredECompetences = this.eCompetences
      .filter(competence => competence.area === this.selectedArea && this.chosenECompetences?.every(ecompetence => ecompetence.guid !== competence.guid));
  }

  onRemove(eCompetence: ECompetence, index: number): void {
    this.chosenECompetences.splice(index, 1);
    this.filterECompetence();
  }

  onRemoveControl(competenceControl: AbstractControl, index: number) {
    this.competenceList.removeAt(index);
  }

  onAdd(): void {
    this.competenceList.push(this.fb.group({
      title: this.fb.control('New competence', Validators.required),
      eCompetences: this.fb.control([])
    }));
  }

  drop(event: CdkDragDrop<ECompetence[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  isSelected(): boolean {
    return this.selectedCompetenceIndex !== undefined;
  }

  get areas(): ECompetenceArea[] {
    return ECompetenceArea.eAreas();
  }

  get competenceList(): FormArray {
    return this.frameworkForm.get('competences') as FormArray;
  }

  get frameworkTitleControl(): AbstractControl {
    return this.frameworkForm.get('title');
  }
}
