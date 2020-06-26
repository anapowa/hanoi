GITLAB PAGE: 
https://anapowa.gitlab.io/hanoi 

TEAM:
ANA RUIZ TOVAR
CHRIS STRANGER

PURPOSE: 
Create "game pieces" that follow a set of rules:
1. only one disk can be moved at a time.
2. Only upper disk from one of the stacks can be moved by placing it on top of another stack. 
3. No disk can be placed on top of a smaller disk. 

DEVELOPMENT PLAN
1. Move a game piece at a time from one tower to a different tower. 
    1. make 4 containers of different sizes/colors
        1. create divs for each with data attributes of different values. 
            - id=“disc1” data-width=“1”
            1. Use query selector to access data in DOM
        2. Have a click handler on each tower
    
    2. Click on a piece to "pick it up".
        1. Get a hold of the top piece using the click handler. 
            - tower.lastElementChild

    3. Click on a tower to "set down" the piece on a different location.
        1. when dropping a piece, only allow a smaller one on top of a bigger one. 
            1. using data-width attribute, compare size, if smaller than the current "top piece", then drop on top.
            - e.g. disc1.dataset.width < disc3.dataset.width
        2. add piece to desired tower.
            - tower.appendChild(disc#)

2. Keep track of the game moves.  

3. Have a way of identifying when the game is complete. 
    1. when all pieces are moved from 1 tower to another.
        - Alert "You won!"