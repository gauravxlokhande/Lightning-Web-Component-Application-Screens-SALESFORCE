

import { LightningElement, track } from 'lwc';

export default class ThirdPage extends LightningElement {
    @track input1;
    @track input2;
    @track input3;
    @track input4;
    @track input5;
    @track clickonbtn = false;

    onclickleadtype(event) {
        // this.input1 = '';
        // this.input2 = '';
        // this.input3 = '';
        // this.input4 = '';
        // this.input5 = '';
    }

    onreset(event) {
       
        this.input1 = false;
        this.input2 = false;
        this.input3 = false;
        this.input4 = false;
        this.input5 = false;
       
    }

    onFilter(e) {
        this.clickonbtn = true;
    }

   
}
