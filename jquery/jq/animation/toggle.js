body{
  background: #EEEEEE;
}

.lbl{
  position: relative;
  display: block;
  height: 20px;
  width: 44px;
  background: #898989;
  border-radius: 100px;
  cursor: pointer;
  transition: all .3s ease;
}
  .lbl:after{
    position: absolute;
    left: -2px;
    top: -3px;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 100px;
    background: white;
    box-shadow: 0px 3px 3px rgba(#000,.05);
    content: '';
    transition: all .3s ease;
  }
  .lbl:before{
    position: absolute;
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 100px;
    background: rgba(#898989,.2);
    margin: -25px 0 0 -25px;
    content: '';
    transform: scale(0);
  }
  .lbl:active
    .lbl:before{
      transform: scale(1);
    }

.cbx:checked>label{
  background: #6FBEB5;
}
  [checkbox]:after{
    left: 20px;
    background: #179588;
  }
  &:before{
    background: rgba(#179588,.2);
    left: 20px;
  }
    
.cbx:disabled ~ label{
  background: #D5D5D5;
  pointer-events: none;
}
  &:after{
    background: #BCBDBC;
  }
  
.cntr{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  }
.press{
  margin-bottom: 40px;
}
  
.hidden{
  display: none;
  }