import { Component } from '@angular/core';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valendo = 1;
  pontostime1 = 0;
  pontostime2 = 0;
  vitoriastime1 = 0;
  vitoriastime2 = 0;



  constructor() {}


  mudarvalendo1() {
    this.valendo = 1;
  }

  mudarvalendo3() {
    this.valendo = 3;
  }

  mudarvalendo6() {
    this.valendo = 6;
  }

  mudarvalendo9() {
    this.valendo = 9;
  }

  mudarvalendo12() {
    this.valendo = 12;
  }



  aumentartime1() {
    // Ele aumenta os pontos do time 1.
    this.pontostime1 = this.pontostime1 + this.valendo;
    this.valendo = 1;

    if(this.pontostime1 >= 12){
      this.pontostime1 = 0;
      this.vitoriastime1 = this.vitoriastime1 + 1;
    }
  }

  diminuirtime1() {
    // Ele diminui os pontos do time 1.
    this.pontostime1 = this.pontostime1 - this.valendo;
    this.valendo = 1;

    if(this.pontostime1 <= 0){
      this.pontostime1 = 0;
    }
  }

  aumentartime2() {
    // Ele aumenta os pontos do time 2.
    this.pontostime2 = this.pontostime2 + this.valendo;
    this.valendo = 1;

    if(this.pontostime2 >= 12){
      this.pontostime2 = 0;
      this.vitoriastime2 = this.vitoriastime2 + 1;
    }
  }

  diminuirtime2() {
    // Ele diminui os pontos do time 2.
    this.pontostime2 = this.pontostime2 - this.valendo;
    this.valendo = 1;

    if(this.pontostime2 <= 0){
      this.pontostime2 = 0;
    }
  }



  limpartudo() {
    // Ele limpa todos os dados do marcador.
    this.valendo = 1;
    this.pontostime1 = 0;
    this.pontostime2 = 0;
    this.vitoriastime1 = 0;
    this.vitoriastime2 = 0;
  }

}
