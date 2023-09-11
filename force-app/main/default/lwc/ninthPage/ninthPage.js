import { LightningElement, track } from 'lwc';
import carpic from '@salesforce/resourceUrl/car';

export default class NinthPage extends LightningElement {
 
    @track imageUrl = carpic;

    handlebluecolor() {
        const imageElement = this.template.querySelector('.image');
        imageElement.style.filter = 'hue-rotate(270deg)'; 
    }
    handleredcolor() {
      const imageElement = this.template.querySelector('.image');
        imageElement.style.filter = 'hue-rotate(0deg)';
    }
    handlegreencolor() {
        const imageElement = this.template.querySelector('.image');
        imageElement.style.filter = 'hue-rotate(90deg)';
    }
    handlepurplecolor() {
        const imageElement = this.template.querySelector('.image');
        imageElement.style.filter = 'hue-rotate(270deg)';
    }
    handleskybluecolor() {
        const imageElement = this.template.querySelector('.image');
        imageElement.style.filter = 'hue-rotate(210deg)';
    }
    handleskincolor() {
        const imageElement = this.template.querySelector('.image');
        imageElement.style.filter = 'hue-rotate(0deg)';
    }
}