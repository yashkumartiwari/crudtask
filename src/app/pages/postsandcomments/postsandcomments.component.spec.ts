import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsandcommentsComponent } from './postsandcomments.component';

describe('PostsandcommentsComponent', () => {
  let component: PostsandcommentsComponent;
  let fixture: ComponentFixture<PostsandcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsandcommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsandcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
