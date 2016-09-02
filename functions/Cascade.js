getElement('myBoxDiv').
        move(350 , 150).
        width(100).
        height(100).
        color('red').
        border('10px outset').
        padding('4px').
        appendText("Please stand by").
        on('mousedown',function(m){
            this.startDrag(m,this.getNinth(m));
        }).
        on('mousemove','drag').
        on('mouseup','stopDrag').
        later(2000, function(){
            this.
                    color('yello').
                    setHTML("What hath God waraugh?").
                    slide(400, 40, 200, 200)
        }).
        tip('This box is resizable');
