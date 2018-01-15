import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { WelcomeComponent } from './welcome.component';
import { UserService } from './model/user.service';

describe('WelcomeComponent', () => {
  let comp: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let debugElement: DebugElement;
  let nativeElement: HTMLElement;
  let spy: any;

  const userServiceStub = {
    isLoggedIn: true,
    user: { name: 'Test User'}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       declarations: [ WelcomeComponent ],
       providers:    [ UserService ]
    });

    fixture = TestBed.createComponent(WelcomeComponent);
    comp = fixture.componentInstance;
    debugElement = fixture.debugElement;
    nativeElement = debugElement.query(By.css('h3')).nativeElement;

    const userService = fixture.debugElement.injector.get(UserService);
    spy = spyOn(userService, 'getUser')
      .and.returnValue(Promise.resolve({name: 'user double'}));
  }));

  it('should not show user before OnInit', () => {
    expect(nativeElement.textContent).toBe('');
     expect(spy.calls.any()).toBe(false);
  });

  it('should still not show user after component initialized', () => {
    fixture.detectChanges();
    expect(nativeElement.textContent).toBe('-- not initialized yet --');
    expect(spy.calls.any()).toBe(true);
  });

  it('should show user after getUser promise (async)', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => { // wait for async getQuote
      fixture.detectChanges();        // update view with quote
      expect(nativeElement.textContent).toBe('user double');
    });
  }));

  it('should show user after getUser promise (fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    tick();                  // wait for async getQuote
    fixture.detectChanges(); // update view with quote
    expect(nativeElement.textContent).toBe('user double');
  }));

});
