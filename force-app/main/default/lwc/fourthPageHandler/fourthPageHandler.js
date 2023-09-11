import { LightningElement, track } from 'lwc';

export default class FourthPageHandler extends LightningElement {

    @track navigateto5thpage = false;

    options = [
        { id: 'option1', label: 'Supertech' },
        { id: 'option2', label: 'Option 2' },
        { id: 'option3', label: 'Option 3' },
        { id: 'option4', label: 'Option 4' },
    ];

    options2 = [
        { id: 'option5', label: 'Shilp Arcadia' },
        { id: 'option6', label: 'Option 6' },
        { id: 'option7', label: 'Option 7' },
        { id: 'option8', label: 'Option 8' },
    ];


    options3 = [
        { id: 'option5', label: 'Punjab' },
        { id: 'option6', label: 'Option 6' },
        { id: 'option7', label: 'Option 7' },
        { id: 'option8', label: 'Option 8' },
    ];


     options4 = [
        { id: 'option5', label: 'Chandigarh' },
        { id: 'option6', label: 'Option 6' },
        { id: 'option7', label: 'Option 7' },
        { id: 'option8', label: 'Option 8' },
     ];
    
    
     options5 = [
        { id: 'option5', label: 'sector 14' },
        { id: 'option6', label: 'sector 34 ' },
        { id: 'option7', label: 'sector 10' },
         { id: 'option8', label: 'sector 11' },
         { id: 'option5', label: 'sector 21' },
        { id: 'option6', label: 'sector 17' },
    ];
    // Add more sets of options as needed
    handleClick(e) {
        this.navigateto5thpage = true;
    }
}

