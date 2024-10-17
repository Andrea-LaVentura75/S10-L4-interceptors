import { Component } from '@angular/core';
import { FotoService } from '../../services/foto.service';
import { UtenteImg } from '../../interfaces/utente-img';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private fotoSvc: FotoService) {}

  fotoArray!: UtenteImg[];
  arrayId: number[] = [];
  like = 0;

  ngOnInit() {
    this.fotoSvc.getAllFoto().subscribe({
      next: (data) => {
        this.fotoArray = data.filter((data) => data.albumId === 1);

        console.log(this.fotoArray);
      },
    });
    this.fotoSvc.subLike$.subscribe((foto) => {
      if (this.arrayId.includes(foto)) {
        alert('Non puoi mettere like alla stessa foto');
      } else {
        this.like++;
        this.arrayId.push(foto);
      }
      this.arrayId.push(foto);
    });
  }

  removePhoto(photo: UtenteImg) {
    this.fotoArray = this.fotoArray.filter((p) => p !== photo);
  }

  // counter(idFoto: number) {
  //   if (this.arrayId.includes(idFoto)) {
  //     alert('Non puoi mettere like alla stessa foto');
  //   } else {
  //     this.like++;
  //     this.arrayId.push(idFoto);
  //   }
  // }
  counter(foto: number) {
    this.fotoSvc.addToLike(foto);
  }
}
