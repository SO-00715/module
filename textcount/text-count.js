window.addEventListener('DOMContentLoaded', function() {
    new CountText();
});

class CountText {
    constructor() {
        this.node = document.querySelector('#count-text');
        this._countText();
    }
    _countText() {
        this.node.addEventListener('keyup', function() {
            let count = this.value.length;
    
            let counterNode = document.querySelector('.show-count-text');
            
            counterNode.innerHTML = count;
            console.log(counterNode);
        });
    }
}