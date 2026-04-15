import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserPage } from './single-user-page';

describe('SingleUserPage', () => {
  let component: SingleUserPage;
  let fixture: ComponentFixture<SingleUserPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleUserPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleUserPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
