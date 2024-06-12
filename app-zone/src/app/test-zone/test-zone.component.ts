import { Component, NgZone, inject } from '@angular/core';

@Component({
  selector: 'app-test-zone',
  standalone: true,
  imports: [],
  templateUrl: './test-zone.component.html',
  styleUrl: './test-zone.component.css'
})
export class TestZoneComponent {

  private zone:NgZone=inject(NgZone);

  cpt = 0;
  inter1:any = null;
  inter5:any = null;

  clickTimer1s(){
    this.inter1 = setInterval(()=>this.cpt++,1000);
  }

  clickTimer5s(){
    this.zone.runOutsideAngular( () =>{
      this.inter1 = setInterval(()=>{
        this.cpt++
        console.log(this.cpt)
        if(this.cpt % 5==0){
          this.zone.run((()=>{
            this.cpt+=0
          }))


        }
      },1000);

    });





  }

  ngDestroy(){
    clearInterval(this.inter1);
  }

}
