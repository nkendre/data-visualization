import { Component } from '@angular/core';
import { TestService } from '../../../test.service';
import { Observable } from 'rxjs';
import { error } from 'highcharts';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(private test:TestService)
  {

  }

  ngOnInit()
  {
    this.displayUserData();
    this.postUserData();
  }

  displayUserData()
  {
    this.test.getForcast().subscribe((res:any)=>
    {
     if(res)
      {
        console.log(res);
      }
    }
  );
  }
  
  postUserData()
  {
    this.test.postForcast().subscribe((res:any)=>
      {
       if(res)
        {
          console.log(res);
        }
      },
      (error)=>
        {
          console.log(error);
        });
  }


}
