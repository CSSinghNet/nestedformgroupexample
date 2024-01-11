import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildformComponent } from './childform.component';

describe('ChildformComponent', () => {
  let component: ChildformComponent;
  let fixture: ComponentFixture<ChildformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
