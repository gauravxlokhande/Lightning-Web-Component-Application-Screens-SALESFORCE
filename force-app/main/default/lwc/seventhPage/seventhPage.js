import { LightningElement, track } from 'lwc';
import pictureprofile from '@salesforce/resourceUrl/gaurav';
import coverphoto from '@salesforce/resourceUrl/coverpic';
import graybaground from '@salesforce/resourceUrl/bagroundgray';

export default class SeventhPage extends LightningElement {


    profile = pictureprofile;
    coverpic = coverphoto;
    grayimg = graybaground;
    @track thiscompo = true;
}