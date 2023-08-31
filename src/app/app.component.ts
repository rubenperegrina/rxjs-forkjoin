import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: ''
})
export class AppComponent {

  buildProfilePage() {
    const perfilObservable: Observable<any> = apiService.getPerfil();
    const pedidosObservable: Observable<any> = apiService.getPedidos();
    const actividadesObservable: Observable<any> = apiService.getActividades();
    forkJoin( [perfilObservable, pedidosObservable, actividadesObservable])
      .subscribe(
        ([perfil, pedidos, atividades]) => {
          console. log( 'Perfil do usuario:', perfil);
          console. log( 'Pedidos recientes:', pedidos);
          console. log( 'Atividades de login:', atividades);
          this.updateUI(perfil, pedidos, atividades);
        },
        error => {
          console.log('ERROR');
        }
      );
  }
}
