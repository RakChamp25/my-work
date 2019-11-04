import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {

  printHello() {
    console.log("hello");
  }

  @action
  checkOp() {
    this.printHello?.();
  }
}