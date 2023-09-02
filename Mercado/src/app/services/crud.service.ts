import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Product } from '../models/Produto.models';

@Injectable({
  providedIn: 'root'})
export class CrudService {
  public lista: any
  public user_id: any;
  constructor(private afd:AngularFirestore, private afa: AngularFireAuth) {
    this.afa.authState.subscribe((user)=>{
      if(user?.uid){
      this.user_id = user?.uid;
      console.log(this.user_id)
      this.list(this.user_id)
    } else {
      this.user_id = ''
    }})}
  save(produto: Product){
    produto.id == '' ? produto.user_create = this.user_id : produto.user_edit = this.user_id
    produto.id == '' ? produto.id = this.afd.createId() : produto.id = produto.id
    return this.afd.collection('Produtos').doc(produto.id).set(produto, {merge: true})
  }
  update(produto: Product){
    return this.afd.collection('Produtos').doc(produto.id).set(produto, {merge: true})
  }
  list(uid: string){
    this.lista =  this.afd.collection('Produtos', ref => {
      return ref.where('user_create', '==', uid)//.where('qtde', '>', 0)
    }).valueChanges()
  }
  delete(id: string){
    return this.afd.collection('Produtos').doc(id).delete()
  }}
