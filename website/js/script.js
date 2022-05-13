const _play_pause_els = document.querySelectorAll('.section--body--item--play');
/* Get all the 'Play' buttons */
_play_pause_els.forEach(_el => {
    /* When the user clicks the button */
    _el.addEventListener('click', (e) => {
        /* Get all the play buttons 
            1. remove the 'active' class 
            2. Change the 'pause' icon to the 'play' icon
        */
        _play_pause_els.forEach(_el2 => {
            if(_el != _el2) {
                _el2.classList.remove('active');
                const _icon_el2 = _el2.querySelector('i');

                if(_icon_el2) {
                    _icon_el2.classList.remove('lni-pause')
                    _icon_el2.classList.add('lni-play');
                }
            }
        });

        _el.classList.toggle('active');

        const _icon_el = _el.querySelector('i');
        if(_icon_el) {
        /* Toggle the icon to 'pause' or 'play' */
            if(_icon_el) {
                if(_el.classList.contains('active')) {
                    _icon_el.classList.remove('lni-play');
                    _icon_el.classList.add('lni-pause');
                } else {
                    _icon_el.classList.remove('lni-pause')
                    _icon_el.classList.add('lni-play');
                }
            }
        }
    });
});

