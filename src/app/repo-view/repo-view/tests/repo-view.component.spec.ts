import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { RepoViewComponent } from '../repo-view.component';
import { RepoViewService } from '../../repo-view-service/repo-view.service';


describe('RepoViewComponent', () => {
  let component: RepoViewComponent;
  let fixture: ComponentFixture<RepoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule,
      ],
      declarations: [
        RepoViewComponent
      ],
      providers: [
        RepoViewService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
