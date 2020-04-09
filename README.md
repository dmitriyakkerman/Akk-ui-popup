**Styles:**
  
  Put the required stylesheet link in HEAD tag:
  
    <link rel="stylesheet" href="./dist/css/akk-ui-popup.min.css">
    
**Javascript**    
    
Put the script at the bottom of your markup: 

    <script src="./dist/js/akk-ui-popup.js"></script>    
   
Or use import/require in your Javascript file:
    
    const Popup = require('./dist/js/akk-ui-popup');
    
    or
    
    import Popup from './dist/js/akk-ui-popup';
 
**Usage**
     
Create parent element for popup layout with an ID or class, put the container element inside for your popup content and also add link/links for calling the plugin:
      
     <div id="my-popup">
        <div></div>
     </div>     
     
     <a href="#">Show popup</a>
         
**Initialization**
 
    document.addEventListener('DOMContentLoaded', function() {
          new Popup(
              document.getElementById('my-popup'),
              document.querySelectorAll('a'), 
              {
                closable: true
              }
          );
        }) 
     
    

