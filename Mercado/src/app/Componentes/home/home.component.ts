import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  produtos = [
    { nome: 'Variedade de Pães Frescos na Mesa', imagem: 'https://st2.depositphotos.com/27201292/46580/i/1600/depositphotos_465804996-stock-photo-vertical-shot-breads-chopping-board.jpg', preco: 9.99 },
    { nome: 'Cesta Colorida de Frutas e Verduras Frescas', imagem: 'https://thumbs.dreamstime.com/b/homem-segurando-um-saco-ecol%C3%B3gico-de-compras-lixo-zero-com-comida-estilo-vida-sem-desperd%C3%ADcio-e-conceito-dieta-saud%C3%A1vel-mala-176755515.jpg', preco: 15.99 },
  ]
}
