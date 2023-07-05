import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBodyComponent } from './post-body.component';

describe('PostBodyComponent', () => {
  let component: PostBodyComponent;
  let fixture: ComponentFixture<PostBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostBodyComponent]
    });
    fixture = TestBed.createComponent(PostBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
