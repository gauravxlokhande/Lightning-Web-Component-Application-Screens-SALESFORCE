import { LightningElement, api, track } from 'lwc';

export default class FourthPage extends LightningElement {
    @api options = [];
    @track filteredOptions = [];
    @track selectedOptions = [];

    // Handle search input change
    handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.filteredOptions = this.options.filter(option =>
            option.label.toLowerCase().includes(searchTerm)
        );
    }

    // Handle checkbox change
    handleCheckboxChange(event) {
        const optionId = event.currentTarget.dataset.optionId;
        const selectedOption = this.options.find(option => option.id === optionId);

        if (event.target.checked) {
            this.selectedOptions = [...this.selectedOptions, selectedOption];
        } else {
            this.selectedOptions = this.selectedOptions.filter(
                option => option.id !== optionId
            );
        }

        this.filteredOptions = this.options.filter(option => !this.selectedOptions.includes(option));
    }

    // Remove selected option
    removeSelectedOption(event) {
        const optionId = event.currentTarget.dataset.optionId;
        const selectedOption = this.options.find(option => option.id === optionId);

        this.selectedOptions = this.selectedOptions.filter(
            option => option.id !== optionId
        );

        this.filteredOptions.push(selectedOption);
    }
}
