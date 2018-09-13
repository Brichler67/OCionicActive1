import { Library } from './../../models/Library';
import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import { BookCdServices } from '../../services/library.service';


@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {

  name: string;
  index: number;
  book: Library;

  constructor(public navParams: NavParams, public navCtrl: NavController, public bookService: BookCdServices, public toastCtrl: ToastController) { }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.bookService.bookList[this.index]
  }

  close() {
    this.navCtrl.pop();
  }

  onToggleAppareil(position: string) {
    this.book.isLend = !this.book.isLend;
    let bookLend = this.book.isLend === true ? 'emprunté' : 'rendu'
    let toast = this.toastCtrl.create({
      message: `Le livre est ${bookLend}`,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

}
