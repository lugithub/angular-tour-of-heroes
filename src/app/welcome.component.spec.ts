import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { WelcomeComponent } from './welcome.component';
import { UserService } from './model/user.service';

fdescribe('WelcomeComponent', () => {
  let comp: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let debugElement: DebugElement;
  let nativeElement: HTMLElement;

  const userServiceStub = {
    isLoggedIn: true,
    user: { name: 'Test User'}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
       declarations: [ WelcomeComponent ],
       providers:    [ {provide: UserService, useValue: userServiceStub } ]
    });
    fixture = TestBed.createComponent(WelcomeComponent);
    comp = fixture.componentInstance;
    debugElement = fixture.debugElement;
    nativeElement = debugElement.query(By.css('h3')).nativeElement;
  })

  it('should have class welcome', () => {
    expect(nativeElement.classList.toString()).toEqual('welcome');
  });

  it('should show welcome message when isLoggedIn', () => {
    fixture.detectChanges();
    expect(nativeElement.textContent).toEqual('Welcome, Test User');
  });

  it('should show login message when not isLoggedIn', () => {
    const userService = fixture.debugElement.injector.get(UserService);
    userService.isLoggedIn = false;
    fixture.detectChanges();
    expect(nativeElement.textContent).toEqual('Please log in.');
  });
}
