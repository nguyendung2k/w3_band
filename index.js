
function linkJs(){
    const buyBtns = document.querySelectorAll('.js-buy-tickets');
        const modal = document.querySelector('.js-modal');
        const modalContainer = document.querySelector('.js-modal-container');
        const modalClose = document.querySelector('.js-model-close');

        //Hiển thị modal
        function showBuyTickets(){
            modal.classList.add('open');
        }

        //Ẩn model
        function hideTickets() {
                modal.classList.remove('open');
        }

        //Lặp qua từng thẻ button và nghe hành vi click
        for(const buyBtn of buyBtns)
        {
            buyBtn.addEventListener('click', showBuyTickets);
        }

        //Nghe hành vi click qua button close
        modalClose.addEventListener('click', hideTickets)


        modal.addEventListener('click', hideTickets)

        modalContainer.addEventListener('click',function(event){
            event.stopPropagation();
        })
}
        
  